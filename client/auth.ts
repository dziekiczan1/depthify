import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { ROUTES } from '@/lib/routes';
import { DefaultUser } from '@auth/core/types';
import { JWT } from '@auth/core/jwt';

type CustomUser = DefaultUser & {
  first_name?: string;
  last_name?: string;
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ account, user }) {
      if (account?.provider !== 'google' || !account.id_token) return true;

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/${ROUTES.BE_GOOGLE_AUTH}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              token: account.id_token,
            }),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }

        const dbUser = await response.json();
        user.id = dbUser.id;

        return true;
      } catch (err: any) {
        throw new Error(err.message || 'Authentication failed');
      }
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
    async jwt({ token, user }: { token: JWT; user: CustomUser }) {
      if (user) {
        token.user = {
          ...user,
          username: user.name ?? `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim(),
        };
      }
      return token;
    },
  },
  pages: {
    signIn: ROUTES.LOGIN,
    error: ROUTES.AUTH_ERROR,
  },
  session: {
    strategy: 'jwt' as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
  ...authConfig,
});
