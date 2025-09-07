import { FormValues } from '@/components/register/registerFormConfig';
import { authenticateUser } from '@/lib/authUtils';

export const registerUser = async (values: FormValues, redirectTo?: string, provider?: string) => {
  try {
    const isGoogle = provider === 'google';
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => null);

      if (response.status === 422) {
        return { error: 'Registration failed. Please try again!' };
      }

      return { error: errData?.detail || 'Registration failed. Please try again!' };
    }

    if (isGoogle) {
      return { success: true, redirectTo };
    }

    const authResult = await authenticateUser({
      email: values.email,
      password: values.password,
      redirectTo,
    });

    if (!authResult.success) {
      return { error: authResult.error };
    }

    return { success: true, redirectTo: authResult.redirectTo };
  } catch (err) {
    return { error: 'Something went wrong. Please try again later!' };
  }
};
