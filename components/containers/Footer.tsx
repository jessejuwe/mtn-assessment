"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { images } from "@/constants";
import { SOCIALS } from "@/helpers/footer.helper";

export default function Footer() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center bg-black px-4 py-4">
      {/* Logo */}
      <Stack align="center" justifyContent="center" gap={6}>
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center space-x-2" prefetch={false}>
            <Image
              className="h-auto w-14"
              src={images.icon2}
              alt="MTN Logo"
              priority
              width={120}
              height={30}
              sizes="(max-width: 768px) 100vw, 160px"
            />
          </Link>
        </motion.div>

        <p className="text-muted-foreground text-center text-xs md:text-sm">
          ©2023 MTN Nigeria Communications PLC. All rights reserved. Privacy Policy & Data Protection
        </p>

        {/* Socials */}
        <div className="flex items-center justify-center gap-2">
          {SOCIALS.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Image src={link.image} alt={link.name} className="h-6 w-auto" />
            </Link>
          ))}
        </div>
      </Stack>
    </div>
  );
}
