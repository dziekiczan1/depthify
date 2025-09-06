import NextAuth from 'next-auth';

import authConfig from '@/auth.config';
import { ROUTES } from '@/lib/routes';

const authRoutes = [ROUTES.LOGIN, ROUTES.REGISTER];

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(ROUTES.HOME, nextUrl));
    }
    return null;
  }

  return null;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
