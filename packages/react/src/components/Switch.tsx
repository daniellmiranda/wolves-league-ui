import * as SwitchPrimitive from '@radix-ui/react-switch';

export const Switch = ({ id }: { id?: string }) => (
  <SwitchPrimitive.Root
    id={id}
    className="data-[state=checked]:border-wl-700 relative h-6 w-10 cursor-default rounded-full border border-gray-700 bg-gray-900 shadow-md outline-none focus:shadow-sm"
  >
    <SwitchPrimitive.Thumb className="data-[state=checked]:bg-wl-700 block h-5 w-5 translate-x-[0.063rem] rounded-full bg-gray-100 shadow-md transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[17px]" />
  </SwitchPrimitive.Root>
);
Switch.displayName = 'Switch';
