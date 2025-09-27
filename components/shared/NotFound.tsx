"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { Home } from "lucide-react";

import { images } from "@/constants";

export default function NotFound404() {
  return (
    <div className="flex h-[calc(100vh-5rem)] w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <Image src={images.notFound} alt="Not Found" className="size-64" />
        <h2 className="text-lg font-medium">Not Found</h2>
        <p className="text-muted-foreground">Oops, this page {"doesn't"} exist.</p>
        <Button asChild variant="subtle">
          <Link href="/">
            <Home size={12} /> Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
