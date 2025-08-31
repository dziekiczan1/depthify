import Link from 'next/link';
import { Bubbles } from 'lucide-react';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group"
      aria-label="Go to Depthify homepage">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110 will-change-transform">
        <Bubbles className="w-6 h-6 text-white" />
      </div>

      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent transition-colors duration-200 group-hover:from-blue-700 group-hover:to-blue-900">
        Depthify
      </span>
    </Link>
  );
};

export default Logo;
