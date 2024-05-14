import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../lib/utils';

const button = tv({
  base: cn(
    'inline-flex w-fit transform cursor-default gap-2 rounded-lg border border-transparent px-4 py-2 font-medium transition-all ease-in-out active:scale-95 disabled:cursor-not-allowed disabled:border-dashed disabled:border-gray-400 disabled:bg-transparent disabled:text-gray-400',
  ),
  variants: {
    variant: {
      primary: cn(
        'border border-gray-600 bg-gray-900  text-gray-100 hover:bg-gray-600',
      ),
      secondary: cn(
        'border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-gray-900',
      ),
      tertiary: cn('text-gray-100 hover:text-gray-400'),
      highlight: cn(
        'bg-wl-700 border-wl-400 hover:bg-wl-900 hover:border-wl-900 border text-white',
      ),
      link: cn(
        'cursor-pointer p-1 text-gray-100 underline-offset-4 hover:underline',
      ),
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
    full: {
      true: cn('w-full justify-center'),
    },
    icon: {
      true: 'text-white',
    },
  },
  compoundVariants: [
    {
      icon: true,
      size: 'sm',
      className: 'p-1',
    },
    {
      icon: true,
      size: 'md',
      className: 'p-[0.375rem]',
    },
    {
      icon: true,
      size: 'lg',
      className: 'p-2',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof button> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, full, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={button({ variant, size, full, icon })}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
