import * as SwitchPrimitive from '@radix-ui/react-switch';

export const Switch = ({ id }: { id?: string }) => (
  <SwitchPrimitive.Root
    id={id}
    className="w-10 h-6 bg-gray-900 rounded-full relative shadow-md border border-gray-700 focus:shadow-sm data-[state=checked]:border-wl-700 outline-none cursor-default"
  >
    <SwitchPrimitive.Thumb className="block w-5 h-5 bg-gray-100 data-[state=checked]:bg-wl-700 rounded-full shadow-md transition-transform duration-100 translate-x-[0.063rem] will-change-transform data-[state=checked]:translate-x-[17px]" />
  </SwitchPrimitive.Root>
);
Switch.displayName = 'Switch';
