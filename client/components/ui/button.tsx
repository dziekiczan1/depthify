import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'relative rounded-lg text-white shadow-lg shadow-blue-500/25 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-blue-500/40 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-white/5 before:to-white/10 before:translate-x-[-120%] hover:before:translate-x-[120%] before:transition-transform before:duration-700 before:ease-in-out before:rounded-lg before:opacity-40 overflow-hidden will-change-transform',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20',
        outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        secondary:
          'relative rounded-lg text-blue-500 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-blue-300 shadow-md transition-all duration-300 ease-out hover:scale-[1.03] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-blue-100/20 before:to-white/20 before:translate-x-[-120%] hover:before:translate-x-[120%] before:transition-transform before:duration-700 before:ease-in-out before:rounded-lg overflow-hidden will-change-transform',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        plain:
          'bg-transparent border-none shadow-none text-foreground hover:bg-accent/20 transition-colors duration-200',
      },
      size: {
        default: 'h-10 px-6 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-12 text-lg',
        icon: 'size-9',
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
