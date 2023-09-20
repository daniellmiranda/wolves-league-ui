import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@wolves-league-ui/react';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Form/Switch',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <label htmlFor="switch-id" className="text-gray-100">
        Label
      </label>
      <Switch {...args} />
    </div>
  ),
  args: {
    id: 'switch-id',
  },
};
