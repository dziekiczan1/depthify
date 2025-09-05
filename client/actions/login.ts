import { FormValues } from '@/components/login/loginFormConfig';
import { authenticateUser } from '@/lib/authUtils';

export const loginUser = async (values: FormValues, redirectTo?: string) => {
  try {
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
    return { error: 'Login failed' };
  }
};
