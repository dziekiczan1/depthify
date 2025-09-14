'use client';

import Link from 'next/link';
import { Bubbles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <div className="flex md:w-1/3 items-center space-x-3 group">
      <Link href="/" aria-label="Go to Depthify homepage">
        <motion.div
          className="w-10 h-10 rounded-full gradient-cyan flex items-center justify-center shadow-xl"
          whileHover={{ scale: 1.15 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>
          <Bubbles className="icon-size-lg text-white" />
        </motion.div>
      </Link>

      <motion.span
        className="text-2xl font-extrabold gradient-cyan bg-clip-text text-transparent"
        whileHover={{ backgroundPosition: '100% center' }}
        transition={{ duration: 0.5 }}>
        Depthify
      </motion.span>
    </div>
  );
};
