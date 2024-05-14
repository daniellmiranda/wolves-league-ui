import * as SliderPrimitive from '@radix-ui/react-slider';
import React from 'react';

export const Slider = React.forwardRef<
  HTMLSpanElement,
  SliderPrimitive.SliderProps
>((props, ref) => (
  <SliderPrimitive.Root
    className="relative flex h-5 w-[200px] touch-none select-none items-center data-[orientation=vertical]:h-[200px] data-[orientation=vertical]:w-5 data-[orientation=vertical]:flex-col"
    {...props}
    ref={ref}
  >
    <SliderPrimitive.Track className="relative h-[3px] grow rounded-full bg-gray-900 data-[orientation=vertical]:w-[3px]">
      <SliderPrimitive.Range className="bg-wl-700 absolute rounded-full data-[orientation=horizontal]:h-[3px] data-[orientation=vertical]:w-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="bg-wl-700 border-wl-400 hover:bg-wl-700 focus block h-5 w-5 rounded-full border shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-100 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.7)] focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:border-gray-600 data-[disabled]:bg-gray-900" />
  </SliderPrimitive.Root>
));
Slider.displayName = 'Slider';
