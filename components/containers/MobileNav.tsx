"use client";

import React, { useState } from "react";
import {
  Button,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";

import { cn } from "@/utils/utils";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        size="full"
        placement="start"
      >
        <Drawer.Trigger asChild>
          <IconButton
            aria-label="Toggle menu"
            variant="ghost"
            className={cn([
              "border-[0.5px] border-[#EDF2F7]/50 rounded-lg",
              "text-white",
            ])}
          >
            <Menu size={24} />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content roundedRight="l3">
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </div>
  );
}
