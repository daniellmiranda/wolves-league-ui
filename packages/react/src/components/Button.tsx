import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'inline-flex gap-2 px-4 py-2 rounded-lg transition-all ease-in-out border border-transparent font-medium transform cursor-default active:scale-95 disabled:text-gray-400 disabled:border-dashed disabled:border-gray-400 disabled:bg-transparent disabled:cursor-not-allowed w-fit',
  variants: {
    variant: {
      primary: 'bg-gray-900 text-gray-100 border border-gray-600  hover:bg-gray-600',
      secondary: 'border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-gray-900',
      tertiary: 'text-gray-100 hover:text-gray-400',
      highlight: 'bg-wl-700 text-white border border-wl-400 hover:bg-wl-900 hover:border-wl-900',
      link: 'underline-offset-4 cursor-pointer text-gray-100 hover:underline p-1',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
    full: {
      true: 'w-full justify-center',
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

interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof button> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, full, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={button({ variant, size, full, icon })} ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
