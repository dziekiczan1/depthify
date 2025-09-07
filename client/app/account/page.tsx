import { Button } from '@/components/ui/button';
import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/routes';

export default async function AccountPage() {
  const session = await auth();

  if (!session) {
    redirect(ROUTES.LOGIN);
  }

  return (
    <div>
      <h1>Account Page</h1>
      <>{JSON.stringify(session)}</>
      <p>Welcome, {session.user?.email}</p>
      <form
        action={async () => {
          'use server';
          await signOut();
          redirect(ROUTES.HOME);
        }}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
