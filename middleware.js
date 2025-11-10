// app/middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  const path = req.nextUrl.pathname;

  if (path === "/") {
    // Home page: 1 hour
    res.headers.set(
      "Cache-Control",
      "public, max-age=3600, s-maxage=3600, stale-while-revalidate=60"
    );
  } else {
    // All other paths: 5 minutes
    res.headers.set(
      "Cache-Control",
      "public, max-age=300, s-maxage=300, stale-while-revalidate=60"
    );
  }

  return res;
}

// Optional: match all routes
export const config = {
  matcher: "/:path*",
};
