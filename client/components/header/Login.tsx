import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link
        href="/login"
        className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
        Login
      </Link>
      <Button asChild>
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
};

export default Login;
