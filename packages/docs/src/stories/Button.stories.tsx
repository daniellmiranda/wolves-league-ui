import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@wolves-league/react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

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
      options: ['primary', 'secondary', 'highlight', 'iconOnly'],
    },
    theme: { control: 'select', options: ['light', 'dark'] },
    disabled: { control: 'boolean' },
    onClick: { table: { disable: true }, action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button Text',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button Text',
    variant: 'secondary',
  },
};

export const Highlight: Story = {
  args: {
    children: 'Button Text',
    variant: 'highlight',
  },
};

export const IconOnly: Story = {
  args: {
    children: <Cog6ToothIcon style={{ height: '2rem', widows: '2rem' }} />,
    variant: 'iconOnly',
  },
};
