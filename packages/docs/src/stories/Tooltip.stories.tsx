import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@wolves-league-ui/react';
import { InfoIcon } from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Overlay/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon className="h-4 w-4 text-gray-100" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip Text</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Right: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon className="h-4 w-4 text-gray-100" />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip Text</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Bottom: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon className="h-4 w-4 text-gray-100" />
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip Text</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Left: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon className="h-4 w-4 text-gray-100" />
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip Text</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
