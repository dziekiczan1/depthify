import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-300 ease-out will-change-transform",
  {
    variants: {
      variant: {
        default:
          'relative rounded-lg text-white shadow-lg shadow-blue-500/25 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-[1.03] hover:shadow-blue-500/40 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-white/5 before:to-white/10 before:translate-x-[-120%] hover:before:translate-x-[120%] before:transition-transform before:duration-700 before:ease-in-out before:rounded-lg before:opacity-40 overflow-hidden',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20',
        outline:
          'rounded-lg border bg-white shadow-xs hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.03] focus-visible:border-slate-300',
        secondary:
          'relative rounded-lg text-blue-500 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-blue-300 shadow-md hover:scale-[1.03] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-blue-100/20 before:to-white/20 before:translate-x-[-120%] hover:before:translate-x-[120%] before:transition-transform before:duration-700 before:ease-in-out before:rounded-lg overflow-hidden',
        link: 'text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline cursor-pointer',
        plain: 'bg-transparent border-none shadow-none text-foreground hover:bg-slate-50/20',
      },
      size: {
        default: 'h-10 px-6 py-2 has-[>svg]:px-3',
        link: 'p-0 h-auto',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-12 text-md px-6 has-[>svg]:px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
