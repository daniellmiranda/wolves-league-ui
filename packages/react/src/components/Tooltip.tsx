'use client';
import * as TooltipRadix from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  side?: TooltipRadix.PopperContentProps['side'];
}

export const Tooltip = ({ children, content, side }: TooltipProps) => {
  return (
    <TooltipRadix.Provider delayDuration={0}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            sideOffset={5}
            side={side}
            avoidCollisions
            className="bg-gray-900 border border-gray-600 shadow-md rounded-md py-2 px-4 text-sm text-gray-100 data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
          >
            {content}
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};
Tooltip.displayName = 'Tooltip';
