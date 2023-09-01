import type { Meta, StoryObj } from '@storybook/react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { Button } from '@wolves-league-ui/react';

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
      options: ['primary', 'secondary', 'highlight', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
    onClick: { table: { disable: true }, action: 'clicked' },
    asChild: { control: 'boolean' },
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

export const Highlight: Story = {
  args: {
    children: 'Button Text',
    variant: 'highlight',
  },
};

export const Link: Story = {
  args: {
    children: <a href="javascript:void(0)">Button Text</a>,
    variant: 'link',
    asChild: true,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const TextWithIcon: Story = {
  args: {
    children: (
      <>
        <Cog6ToothIcon width="24" height="24" /> Button Text
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Icon: Story = {
  args: {
    children: <Cog6ToothIcon width="24" height="24" />,
    size: 'icon',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
