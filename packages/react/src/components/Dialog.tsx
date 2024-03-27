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
        className="flex flex-col fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-gray-900 text-gray-100 p-4 rounded-md border border-gray-700 text-sm gap-4 shadow-lg data-[state=open]:animate-contentShow"
      >
        {props.children}
        <DialogPrimitive.Close className="absolute right-3 top-3 p-1 cursor-default">
          <Cross2Icon className="hover:text-gray-200 transition-all ease-in-out" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Overlay>
  </DialogPrimitive.Portal>
);
Dialog.displayName = DialogPrimitive.Content.displayName;
Dialog.Content = Content;

export const Title = ({ ...props }: DialogPrimitive.DialogTitleProps) => (
  <DialogPrimitive.Title {...props} className="font-bold text-lg" />
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
