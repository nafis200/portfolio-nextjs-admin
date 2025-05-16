import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const parsedUser = JSON.parse(user);

  if (parsedUser.role !== "admin") {
    const url = new URL("/login", request.url);
    url.searchParams.set("error", "not-admin");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
