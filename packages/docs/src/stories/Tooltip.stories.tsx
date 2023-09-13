import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@wolves-league-ui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Overlay/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: false, defaultValue: 'Tooltip Text' },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <InformationCircleIcon height="24" width="24" className="dark:text-gray100" />,
    content: 'Tooltip content',
  },
};
