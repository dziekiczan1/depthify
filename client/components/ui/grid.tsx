import { cn } from '@/lib/utils';

interface GridProps {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Grid = ({ children, gap = 'lg', className }: GridProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        {
          'gap-4': gap === 'sm',
          'gap-6': gap === 'md',
          'gap-8': gap === 'lg',
        },
        className
      )}>
      {children}
    </div>
  );
};
