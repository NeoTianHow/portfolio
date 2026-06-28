type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  maxAttempts: number;
  windowMs: number;
  maxEntries?: number;
  now?: () => number;
};

export type RateLimitResult =
  | {
      allowed: true;
      remaining: number;
      resetAt: number;
    }
  | {
      allowed: false;
      retryAfterSeconds: number;
      resetAt: number;
    };

const DEFAULT_MAX_ENTRIES = 500;
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_WINDOW_MS = 60 * 60 * 1000;

function readPositiveInteger(value: string | undefined, fallback: number) {
  if (!value) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function createContactRateLimiter({
  maxAttempts,
  windowMs,
  maxEntries = DEFAULT_MAX_ENTRIES,
  now = () => Date.now(),
}: RateLimitOptions) {
  const buckets = new Map<string, RateLimitBucket>();

  function pruneExpired(currentTime: number) {
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= currentTime) {
        buckets.delete(key);
      }
    }
  }

  function trimOldest() {
    while (buckets.size >= maxEntries) {
      const oldestKey = buckets.keys().next().value;

      if (!oldestKey) {
        return;
      }

      buckets.delete(oldestKey);
    }
  }

  return {
    check(key: string): RateLimitResult {
      const currentTime = now();
      const normalizedKey = key.trim() || "unknown-client";
      const existing = buckets.get(normalizedKey);

      if (!existing || existing.resetAt <= currentTime) {
        pruneExpired(currentTime);
        trimOldest();

        const resetAt = currentTime + windowMs;
        buckets.set(normalizedKey, { count: 1, resetAt });

        return {
          allowed: true,
          remaining: maxAttempts - 1,
          resetAt,
        };
      }

      if (existing.count >= maxAttempts) {
        return {
          allowed: false,
          retryAfterSeconds: Math.ceil((existing.resetAt - currentTime) / 1000),
          resetAt: existing.resetAt,
        };
      }

      existing.count += 1;

      return {
        allowed: true,
        remaining: maxAttempts - existing.count,
        resetAt: existing.resetAt,
      };
    },
    clear() {
      buckets.clear();
    },
    size() {
      return buckets.size;
    },
  };
}

export function getContactRateLimitKey(headersList: Headers) {
  const forwardedFor = headersList
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();
  const clientIp =
    forwardedFor ||
    headersList.get("cf-connecting-ip")?.trim() ||
    headersList.get("x-real-ip")?.trim() ||
    "unknown-ip";
  const host = headersList.get("host")?.trim() || "unknown-host";

  return `${clientIp}|${host}`;
}

export const contactRateLimiter = createContactRateLimiter({
  maxAttempts: readPositiveInteger(
    process.env.CONTACT_RATE_LIMIT_MAX_ATTEMPTS,
    DEFAULT_MAX_ATTEMPTS,
  ),
  windowMs:
    readPositiveInteger(
      process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS,
      DEFAULT_WINDOW_MS / 1000,
    ) * 1000,
});
