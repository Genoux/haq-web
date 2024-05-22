import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";

type PopupMessageProps = {
  display?: boolean;
  onClose: () => void; // Function to call when the popup is closed
};

export default function PopupMessage({ display, onClose }: PopupMessageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(display as boolean);
  }, [display]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  const handleClose = () => {
    setOpen(false);
    onClose(); // Notify parent component that the popup has been closed
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen: boolean) => {
        if (!newOpen) handleClose(); // Call handleClose only if the dialog is being closed
      }}
    >
      <DialogContent>
        <DialogTitle>Bienvenue à la saison 3!</DialogTitle>
        <DialogHeader>
          <DialogDescription>
            <Image width={600} height={800} src="/images/sCurrent.png" alt="Saison 3" priority />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
