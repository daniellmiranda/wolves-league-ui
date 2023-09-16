import type { Meta, StoryObj } from '@storybook/react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { Button } from '@wolves-league-ui/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Form/Button',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', defaultValue: 'Label' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'highlight', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    full: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { table: { disable: true }, action: 'clicked' },
    asChild: { control: 'boolean' },
  },
  decorators: [
    (Story, context) => {
      const isStoryContext = context.viewMode === 'story';
      return (
        <div
          style={{
            width: isStoryContext ? '100wh' : 'initial',
            height: isStoryContext ? '100vh' : 'initial',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1.875rem 1.25rem',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Label',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Label',
    variant: 'tertiary',
  },
};

export const Highlight: Story = {
  args: {
    children: 'Label',
    variant: 'highlight',
  },
};

export const Link: Story = {
  args: {
    children: <a onClick={() => null}>Label</a>,
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
        <Cog6ToothIcon width="24" height="24" /> Label
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

export const Full: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    full: true,
  },
};
