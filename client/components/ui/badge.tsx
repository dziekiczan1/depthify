import { cn } from '@/lib/utils';

type BadgeProps = {
  text: string;
  color?: 'blue' | 'green' | 'purple' | 'red';
  showPulse?: boolean;
  className?: string;
};

export const Badge = ({ text, color = 'blue', showPulse = false, className }: BadgeProps) => {
  const colorVariants: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
    red: 'bg-red-100 text-red-700',
  };

  const dotVariants: Record<string, string> = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 transition-all duration-300',
        colorVariants[color],
        className
      )}>
      {showPulse && (
        <span
          className={cn('w-2 h-2 rounded-full mr-2 animate-pulse', dotVariants[color])}
          aria-hidden
        />
      )}
      {text}
    </div>
  );
};
