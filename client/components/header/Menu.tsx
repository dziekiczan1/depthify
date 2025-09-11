'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const MenuItem = ({ item }: { item: NavItem }) => (
  <Link
    href={item.href}
    className="block md:inline-block link link-default py-4 px-6 md:py-0 md:px-0">
    {item.label}
  </Link>
);

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav aria-label="Main Navigation" className="relative flex w-1/3">
      <div className="hidden w-full md:flex items-center justify-end md:justify-center space-x-8">
        {navigationItems.map((item) => (
          <MenuItem key={item.href} item={item} />
        ))}
      </div>

      <div className="md:hidden flex items-center relative w-full justify-end">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-md border border-blue-200 hover:bg-white/30 transition-colors duration-200 shadow-sm"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}>
          <motion.div
            initial={{ rotate: 0, opacity: 1 }}
            animate={{ rotate: isOpen ? 180 : 0, opacity: 1 }}
            transition={{ duration: 0.3 }}>
            {isOpen ? (
              <XIcon size={40} className="text-blue-600 p-2" />
            ) : (
              <MenuIcon size={40} className="text-blue-600 p-2" />
            )}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 right-0 h-screen w-4/5 bg-white shadow-lg z-50 flex flex-col backdrop-blur-md border-t border-blue-100">
              {navigationItems.map((item) => (
                <MenuItem key={item.href} item={item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
