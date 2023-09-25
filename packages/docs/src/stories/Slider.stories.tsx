import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@wolves-league-ui/react';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Form/Slider',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
    dir: { control: 'select', options: ['ltr', 'rtl'], defaultValue: 'ltr' },
    inverted: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    minStepsBetweenThumbs: { control: 'number' },
    defaultValue: {},
    value: {},
    onValueChange: {},
    onValueCommit: {},
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};
