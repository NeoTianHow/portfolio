import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";
import * as ts from "typescript";

const source = readFileSync("lib/contact-rate-limit.ts", "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    esModuleInterop: true,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
});
const moduleContext = { exports: {} };

runInNewContext(outputText, {
  Headers,
  console,
  exports: moduleContext.exports,
  module: moduleContext,
  process: {
    env: {},
  },
});

const { createContactRateLimiter, getContactRateLimitKey } =
  moduleContext.exports;

test("blocks repeated contact submissions for the same client key", () => {
  let currentTime = 1_000;
  const limiter = createContactRateLimiter({
    maxAttempts: 2,
    now: () => currentTime,
    windowMs: 60_000,
  });

  assert.equal(limiter.check("client-a").allowed, true);
  assert.equal(limiter.check("client-a").allowed, true);

  const blocked = limiter.check("client-a");

  assert.equal(blocked.allowed, false);
  assert.equal(blocked.retryAfterSeconds, 60);
  assert.equal(limiter.check("client-b").allowed, true);
});

test("allows contact submissions again after the window resets", () => {
  let currentTime = 1_000;
  const limiter = createContactRateLimiter({
    maxAttempts: 1,
    now: () => currentTime,
    windowMs: 10_000,
  });

  assert.equal(limiter.check("client-a").allowed, true);
  assert.equal(limiter.check("client-a").allowed, false);

  currentTime = 11_001;

  assert.equal(limiter.check("client-a").allowed, true);
});

test("derives a stable key from forwarded client headers", () => {
  const key = getContactRateLimitKey(
    new Headers({
      host: "example.com",
      "user-agent": "rotatable-agent",
      "x-forwarded-for": "203.0.113.10, 198.51.100.5",
    }),
  );

  assert.equal(key, "203.0.113.10|example.com");
});

test("bounds stored rate-limit buckets", () => {
  const limiter = createContactRateLimiter({
    maxAttempts: 1,
    maxEntries: 2,
    now: () => 1_000,
    windowMs: 60_000,
  });

  assert.equal(limiter.check("client-a").allowed, true);
  assert.equal(limiter.check("client-b").allowed, true);
  assert.equal(limiter.check("client-c").allowed, true);
  assert.equal(limiter.size(), 2);
});
