import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Login failed:', errorData?.message || 'Invalid credentials');
            return null;
          }

          return await response.json();
        } catch (error) {
          throw new Error(error instanceof Error ? error.message : 'Something went wrong');
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
