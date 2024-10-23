import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const publicRoutes = ["/", "/login" , '/project'];

export async function middleware(request: NextRequest) {
  const user = cookies().get("portfolio-accesstoken");

  const pathName = request.nextUrl.pathname;

  const isPublicRoute =
    publicRoutes.includes(pathName) || pathName.startsWith("/posts") || pathName.startsWith("/project");

  if (pathName.startsWith("/_next") || pathName.startsWith("/static")) {
    return NextResponse.next();
  }

  if (!user && !isPublicRoute ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};