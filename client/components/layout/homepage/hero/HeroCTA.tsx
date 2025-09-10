'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/routes';

export default function HeroCTA() {
  const router = useRouter();
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
      <Button
        onClick={() => router.push(ROUTES.LOGIN)}
        className="flex justify-center items-center gap-2"
        size="lg"
        aria-label={`Register account`}>
        Register for free
        <ArrowRight
          size={24}
          className="text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          aria-hidden
        />
      </Button>
    </div>
  );
}
