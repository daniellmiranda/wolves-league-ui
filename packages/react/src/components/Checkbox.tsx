import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export const Checkbox = ({ id, label }: { id: string; label: string }) => (
  <div className="flex items-center">
    <CheckboxPrimitive.Root
      className="flex h-6 w-6 appearance-none items-center justify-center rounded-sm shadow-md outline-none border transition-all ease-in-out bg-gray-900 border-gray-700 text-gray-100 hover:bg-gray-100 hover:border-gray-100 hover:text-gray-900"
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
