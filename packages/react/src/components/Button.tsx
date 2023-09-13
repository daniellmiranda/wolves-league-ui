import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'inline-flex gap-2 px-4 py-2 rounded-lg transition-all ease-in-out border border-transparent font-medium transform cursor-pointer active:scale-95 disabled:text-gray400 disabled:border-dashed disabled:border-gray400 disabled:bg-transparent disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-gray900 text-gray100 border border-gray700  hover:bg-gray600',
      secondary:
        'border-gray900 text-gray900 hover:bg-gray900 hover:text-gray100 dark:border-gray100 dark:text-gray100 dark:hover:bg-white dark:hover:text-wl700',
      tertiary: 'text-gray900 hover:text-gray200 dark:text-gray100 dark:hover:text-white',
      highlight: 'bg-wl700 text-gray100 hover:bg-wl900',
      link: 'underline-offset-4 cursor-pointer hover:underline p-1',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      icon: 'p-2 text-white',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof button> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={button({ variant, size })} ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
