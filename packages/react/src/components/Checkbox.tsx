import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export const Checkbox = ({ id, label }: { id: string; label: string }) => (
  <div className="flex items-center">
    <CheckboxPrimitive.Root
      className="hover:bg-wl-700 hover:border-wl-400 flex h-6 w-6 appearance-none items-center justify-center rounded-sm border border-gray-700 bg-gray-900 text-gray-100 shadow-md outline-none transition-all ease-in-out"
      id={id}
    >
      <CheckboxPrimitive.Indicator>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <label className="pl-3 text-sm leading-none text-gray-100" htmlFor={id}>
      {label}
    </label>
  </div>
);
Checkbox.displayName = 'Checkbox';
