import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { currentUser } from '@/lib/authUtils';
import LogoutButton from '@/components/header/LogoutButton';

export default async function AccountPage() {
  const user = await currentUser();

  if (!user) {
    redirect(ROUTES.LOGIN);
  }

  return (
    <div>
      <h1>Account Page</h1>
      <>{JSON.stringify(user)}</>
      <p>Welcome, {user?.email}</p>
      <LogoutButton />
    </div>
  );
}
