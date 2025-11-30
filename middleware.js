// app/middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  const path = req.nextUrl.pathname;

  if (path === "/") {
    // Home page: 1 hour
    res.headers.set(
      "Cache-Control",
      "public, max-age=0, s-maxage=0, stale-while-revalidate=0"
    );
  } else {
    // All other paths: 5 minutes
    res.headers.set(
      "Cache-Control",
      "public, max-age=0, s-maxage=0, stale-while-revalidate=0"
    );
  }

  return res;
}

// Optional: match all routes
export const config = {
  matcher: "/:path*",
};
