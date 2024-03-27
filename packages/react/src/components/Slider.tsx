import * as SliderPrimitive from '@radix-ui/react-slider';
import React from 'react';

export const Slider = React.forwardRef<
  HTMLSpanElement,
  SliderPrimitive.SliderProps
>((props, ref) => (
  <SliderPrimitive.Root
    className="relative flex items-center select-none touch-none w-[200px] h-5 data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-5 data-[orientation=vertical]:h-[200px]"
    {...props}
    ref={ref}
  >
    <SliderPrimitive.Track className="bg-gray-900 relative grow rounded-full h-[3px] data-[orientation=vertical]:w-[3px]">
      <SliderPrimitive.Range className="absolute bg-wl-700 rounded-full data-[orientation=horizontal]:h-[3px] data-[orientation=vertical]:w-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block w-5 h-5 bg-wl-700 border border-wl-400 rounded-full hover:bg-wl-700 focus:outline-none focus transition-all duration-100 shadow-[0_2px_10px_rgba(0,0,0,0.5)] focus:shadow-[0_0_0_4px_rgba(0,0,0,0.7)] data-[disabled]:bg-gray-900 data-[disabled]:border-gray-600 data-[disabled]:cursor-not-allowed" />
  </SliderPrimitive.Root>
));
Slider.displayName = 'Slider';
