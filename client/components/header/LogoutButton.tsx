'use client';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { ROUTES } from '@/lib/routes';

export default function LogoutButton() {
  return <Button onClick={() => signOut({ redirectTo: ROUTES.HOME })}>Logout</Button>;
}
