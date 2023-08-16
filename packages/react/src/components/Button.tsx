import { ComponentPropsWithoutRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'py-1 px-2 rounded-md transition-all ease-in-out border border-transparent font-medium text-sm disabled:text-gray400 disabled:border-dashed disabled:border-gray400 disabled:bg-transparent disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-wl700 text-white hover:bg-wl900',
      secondary:
        'dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-wl700 border-gray900 text-gray900 hover:bg-gray900 hover:text-wl300',
      tertiary:
        'text-gray900 hover:text-gray400 dark:text-white dark:hover:text-gray100 disabled:border-transparent',
    },
  },
});

type ButtonProps = ComponentPropsWithoutRef<'button'> & VariantProps<typeof button>;

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button className={button({ variant })} {...props}>
      {children}
    </button>
  );
}
