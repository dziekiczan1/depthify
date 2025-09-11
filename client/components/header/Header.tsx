import { Logo } from '@/components/header/Logo';
import { Menu } from '@/components/header/Menu';
import { Login } from '@/components/header/Login';
import { LayoutContainer } from '@/components/layout/LayoutContainer';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <LayoutContainer>
        <div className="flex justify-between items-center h-16">
          <Logo />
          <Menu />
          <Login />
        </div>
      </LayoutContainer>
    </header>
  );
};
