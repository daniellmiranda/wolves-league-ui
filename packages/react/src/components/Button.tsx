import { ComponentPropsWithoutRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: '',
  variants: {
    variant: {},
    theme: {},
  },
});

type ButtonProps = ComponentPropsWithoutRef<'button'> & VariantProps<typeof button>;

export function Button({ children, variant, theme, ...props }: ButtonProps) {
  return (
    <button className={button({ variant, theme })} {...props}>
      {children}
    </button>
  );
}
