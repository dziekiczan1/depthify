import { signIn } from 'next-auth/react';

export interface AuthCredentials {
  email: string;
  password: string;
  redirectTo?: string;
}

export const authenticateUser = async ({ email, password, redirectTo }: AuthCredentials) => {
  try {
    const response = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      return { success: false, error: 'Login failed. Invalid email or password.' };
    }

    return { success: true, redirectTo };
  } catch (err) {
    return { success: false, error: 'Something went wrong. Please try again later!' };
  }
};
