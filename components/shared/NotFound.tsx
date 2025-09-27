"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

import { Button } from "../ui/Button";
import { images } from "@/constants";

export default function NotFound404() {
  return (
    <div className="w-full h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="gap-4 flex flex-col">
        <Image src={images.notFound} alt="Not Found" className="size-64" />
        <h2 className="text-lg font-medium">Not Found</h2>
        <p className="text-muted-foreground">
          Oops, this page {"doesn't"} exist.
        </p>
        <Button asChild variant="subtle">
          <Link href="/">
            <Home size={12} /> Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
