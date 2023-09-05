import type { Meta, StoryObj } from '@storybook/react';
import { Button, Tooltip } from '@wolves-league-ui/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Others/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: false, defaultValue: 'Tooltip Text' },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <Button>Button Trigger</Button>,
    content: 'Tooltip content',
  },
};
