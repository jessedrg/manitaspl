import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get("host") || ""

  // Force www
  if (
    hostname === "manitaspl.com" &&
    !hostname.startsWith("localhost") &&
    !hostname.startsWith("127.0.0.1")
  ) {
    url.host = "www.manitaspl.com"
    return NextResponse.redirect(url, 301)
  }

  // Strip trailing slashes
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "")
    return NextResponse.redirect(url, 301)
  }

  const response = NextResponse.next()

  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(self)")
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|images|icons|api).*)",
  ],
}
