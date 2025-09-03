import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

const DEFAULT_LOGIN_REDIRECT = '/';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/login') {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isLoggedIn = !!token;

    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login'],
};
