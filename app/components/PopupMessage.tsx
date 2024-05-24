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
  onClose: () => void;
};

export default function PopupMessage({ display, onClose }: PopupMessageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(display as boolean);
  }, [display]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);
    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen: boolean) => {
        if (!newOpen) handleClose();
      }}
    >
      <DialogContent>
        <DialogTitle>Bienvenue à la saison 3!</DialogTitle>
        <DialogHeader>
          <DialogDescription>
            <Image
              width={632}
              height={842}
              src="/images/s3banner.webp"
              alt="Saison3"
              priority={true}
              loading="eager"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
