import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'inline-flex gap-2 px-4 py-2 rounded-lg transition-all ease-in-out border border-transparent font-medium transform active:scale-95 disabled:text-gray400 disabled:border-dashed disabled:border-gray400 disabled:bg-transparent disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-gray900 text-gray100 hover:bg-gray600',
      secondary:
        'dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-wl700 border-gray900 text-gray900 hover:bg-gray900 hover:text-gray100',
      highlight: 'bg-wl700 text-white hover:bg-wl900',
      link: 'underline-offset-4 hover:underline',
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

export function Button({ children, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={button({ variant, size })} {...props}>
      {children}
    </Comp>
  );
}
