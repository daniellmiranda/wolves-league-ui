'use client';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export const Dialog = ({ ...props }) => <DialogPrimitive.Root {...props} />;

export const Trigger = DialogPrimitive.Trigger;
Dialog.Trigger = Trigger;

export const Close = DialogPrimitive.Close;
Dialog.Close = Close;

export const Header = ({ ...props }) => (
  <div {...props} className="flex flex-col" />
);
Dialog.Header = Header;

export const Footer = ({ ...props }) => (
  <div {...props} className="flex justify-end gap-2" />
);
Dialog.Footer = Footer;

export const Content = ({ ...props }: DialogPrimitive.DialogContentProps) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay>
      <DialogPrimitive.Content
        {...props}
        className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-md border border-gray-700 bg-gray-900 p-4 text-sm text-gray-100 shadow-lg"
      >
        {props.children}
        <DialogPrimitive.Close className="absolute right-3 top-3 cursor-default p-1">
          <Cross2Icon className="transition-all ease-in-out hover:text-gray-200" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Overlay>
  </DialogPrimitive.Portal>
);
Dialog.displayName = DialogPrimitive.Content.displayName;
Dialog.Content = Content;

export const Title = ({ ...props }: DialogPrimitive.DialogTitleProps) => (
  <DialogPrimitive.Title {...props} className="text-lg font-bold" />
);
Dialog.displayName = DialogPrimitive.Title.displayName;
Dialog.Title = Title;

export const Description = ({
  ...props
}: DialogPrimitive.DialogDescriptionProps) => (
  <DialogPrimitive.Description {...props} className="text-sm text-gray-200" />
);
Dialog.displayName = DialogPrimitive.Description.displayName;
Dialog.Description = Description;
