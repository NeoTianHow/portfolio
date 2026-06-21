"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" data-theme="light">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "32px",
            background: "#f7f8f5",
            color: "#15181a",
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          <section style={{ maxWidth: "640px", borderTop: "1px solid #cfd6d4", paddingTop: "32px" }}>
            <p style={{ margin: 0, color: "#006a73", fontWeight: 900 }}>Error</p>
            <h1
              style={{
                margin: "12px 0 0",
                fontSize: "clamp(40px, 7vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              Something interrupted the portfolio.
            </h1>
            <p style={{ margin: "20px 0 0", color: "#333b3e", fontSize: "18px", lineHeight: 1.7 }}>
              Try reloading the page. If the problem persists, use the resume or
              LinkedIn links from the home page after the site recovers.
            </p>
            <button
              type="button"
              onClick={() => unstable_retry()}
              style={{
                marginTop: "28px",
                height: "48px",
                border: 0,
                background: "#006a73",
                color: "#f7f8f5",
                padding: "0 20px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
