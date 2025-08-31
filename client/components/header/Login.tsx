import Link from 'next/link';

const Login = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link
        href="/login"
        className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
        Login
      </Link>
      <Link
        href="/register"
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg shadow-blue-500/25">
        Register
      </Link>
    </div>
  );
};

export default Login;
