'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';
import { useSession } from 'next-auth/react';
import { DefaultUser } from '@auth/core/types';

type CustomUser = DefaultUser & {
  username?: string;
};

const Login = () => {
  const { data: session } = useSession();
  const user = session?.user as CustomUser;

  return (
    <div className="hidden md:flex items-center space-x-4 md:w-1/3 justify-end">
      {user ? (
        <span className="text-slate-700 font-medium">
          Welcome,{' '}
          <Link href={ROUTES.ACCOUNT} className="link link-secondary">
            {user.username}
          </Link>
        </span>
      ) : (
        <>
          <Link href={ROUTES.LOGIN} className="link link-default">
            Login
          </Link>
          <Button asChild>
            <Link href={ROUTES.REGISTER}>Register</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default Login;
