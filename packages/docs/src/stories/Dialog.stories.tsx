import type { Meta, StoryObj } from '@storybook/react';
import { Button, Dialog } from '@wolves-league-ui/react';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Overlay/Dialog',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
        </Dialog.Header>
        <p>Dialog Content</p>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="tertiary">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button variant="highlight">Ok</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};
