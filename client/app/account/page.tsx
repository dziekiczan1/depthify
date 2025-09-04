import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Account Page</h1>
      <p>Welcome, {session.user?.email}</p>
      <form action={() => signOut({ callbackUrl: '/' })}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
