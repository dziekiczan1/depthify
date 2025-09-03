'use client';

import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Account = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // redirect to login page
    }
  }, [status, router]);

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return null; // while redirecting

  return (
    <div>
      <h1>Account Page</h1>
      <p>Welcome, {session.user?.email}</p>
    </div>
  );
};

export default Account;
