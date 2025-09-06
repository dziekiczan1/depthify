'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

const ErrorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Authentication Failed</h1>
        <div className="text-slate-600 leading-6 text-center">
          <p>Something went wrong with your authentication.</p>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <p className="flex justify-center gap-1 mt-2">
            <span>You can</span>
            <Button
              variant="link"
              size="link"
              onClick={() => router.push(ROUTES.LOGIN)}
              className="font-semibold"
              aria-label="Go to login">
              go back to login
            </Button>
            <span>or</span>
            <Button
              variant="link"
              size="link"
              onClick={() => router.push(ROUTES.REGISTER)}
              className="font-semibold"
              aria-label="Register">
              register a new account
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
