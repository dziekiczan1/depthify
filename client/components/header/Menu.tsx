'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, X } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const MenuItem = ({ item }: { item: NavItem }) => (
  <Link
    href={item.href}
    className="block md:inline-block text-slate-600 hover:text-blue-600 transition-colors font-medium duration-200">
    {item.label}
  </Link>
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Main Navigation">
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <MenuItem key={item.href} item={item} />
        ))}
      </div>

      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-600 focus:outline-none"
          aria-label="Toggle menu">
          {isOpen ? <X /> : <MenuIcon />}
        </button>

        {isOpen && (
          <div className="fixed top-16 right-0 h-screen w-4/5 bg-white shadow-lg z-50 flex flex-col backdrop-blur-md border-t border-blue-100">
            {navigationItems.map((item) => (
              <MenuItem key={item.href} item={item} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Menu;
