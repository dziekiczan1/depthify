import Logo from '@/components/header/Logo';

const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className={`flex justify-between items-center h-16`}>
          <Logo />
        </div>
      </div>
    </header>
  );
};
export default Header;
