import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@wolves-league/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Forms/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', defaultValue: 'Button Text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: { control: 'boolean' },
    onClick: { table: { disable: true }, action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button Text',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button Text',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button Text',
    variant: 'tertiary',
  },
};
