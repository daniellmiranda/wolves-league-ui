'use client';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { HTMLAttributes, HTMLProps, ReactNode, forwardRef } from 'react';

export function Dialog({ children }: { children: React.ReactNode }) {
  return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>;
}

function DialogTrigger({
  children,
  ...props
}: DialogPrimitive.DialogTriggerProps & { children: React.ReactNode }) {
  return <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>;
}

const DialogTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className="font-bold text-lg" {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className="text-sm text-gray200" {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

function DialogHeader({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className="flex flex-col" {...props} />;
}
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ ...props }, ref) => (
  <div className="flex justify-end gap-2" {...props} ref={ref} />
));
DialogFooter.displayName = 'DialogFooter';

function DialogContent({ children }: { children: ReactNode }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className="bg-black fixed inset-0 backdrop-blur-sm data-[state=open]:animate-overlayShow"
        forceMount
      />
      <DialogPrimitive.Content className="flex flex-col fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-white text-gray900 border-gray100 dark:bg-gray900 dark:text-gray100 p-4 rounded-md border dark:border-gray700 text-sm gap-4 shadow-lg data-[state=open]:animate-contentShow">
        <DialogPrimitive.Close className="absolute right-3 top-3 p-1">
          <Cross2Icon className="hover:text-gray200 dark:hover:text-gray100 transition-all ease-in-out" />
        </DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogPrimitive.Close;
