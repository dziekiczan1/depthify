import { FormValues } from '@/components/register/registerFormConfig';
import { authenticateUser } from '@/lib/authUtils';

export const registerUser = async (values: FormValues, redirectTo?: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => null);
      return { error: errData?.message || 'Registration failed' };
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
    return { error: 'Registration failed' };
  }
};
