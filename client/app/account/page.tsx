import { Button } from '@/components/ui/button';
import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';

export default async function AccountPage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Account Page</h1>
      <p>Welcome, {session.user?.email}</p>
      <form
        action={async () => {
          'use server';
          await signOut();
          redirect('/');
        }}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
