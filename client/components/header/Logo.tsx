import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 group"
      aria-label="Go to Depthify homepage">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110" />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent transition-colors duration-200 group-hover:from-blue-700 group-hover:to-blue-900">
        Depthify
      </span>
    </Link>
  );
};

export default Logo;
