import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@wolves-league-ui/react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Form/Checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => <Checkbox id="default" label="Accept terms and conditions" />,
};
