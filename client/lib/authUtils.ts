import { signIn } from 'next-auth/react';

export interface AuthCredentials {
  email: string;
  password: string;
  redirectTo?: string;
}

export const authenticateUser = async ({ email, password, redirectTo }: AuthCredentials) => {
  try {
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      return { success: false, error: res.error };
    }

    return { success: true, redirectTo };
  } catch (err) {
    return { success: false, error: 'An unexpected error occurred during authentication' };
  }
};
