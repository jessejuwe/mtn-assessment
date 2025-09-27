"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Avatar, IconButton, Input, InputGroup } from "@chakra-ui/react";
import { Menu, Popover, Portal, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Bell, ChevronDown, Search, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import AllProductsMenu from "./AllProductsMenu";
import { ColorModeButton, useColorMode } from "../ui/color-mode";
import { images } from "@/constants";
import { cn } from "@/utils/utils";

const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false, loading: () => <div /> });

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [iconMenuOpen, setIconMenuOpen] = useState(false);

  const { colorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Yellow banner */}
      <motion.div
        className="flex h-12 w-full items-center justify-center bg-[#f4c210] px-10"
        initial={{ y: 0, opacity: 1 }}
        animate={isScrolled ? { y: -60, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Swiper
          id="ads-swiper"
          centeredSlides={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="h-full w-full"
          direction={"vertical"}
          loop
          modules={[Autoplay]}
        >
          <SwiperSlide className="flex h-full w-full items-center justify-center bg-black">
            <div className="mx-auto flex h-full w-[60%] items-center-safe justify-center-safe bg-white text-center text-3xl font-bold text-black">
              Revolutionize your internet experience
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex h-full w-full items-center justify-center bg-black">
            <div className="flex h-full items-center-safe justify-center-safe gap-1.5 text-center text-4xl text-white">
              <span className="font-bold">with 4G Router</span>Premium
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex h-full w-full items-center justify-center bg-transparent">
            <div className="flex h-full items-center-safe justify-center-safe gap-1.5 text-center text-4xl text-black">
              Dial <span className="font-bold">217</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex h-full w-full items-center justify-center bg-transparent">
            <div className="flex h-full items-center-safe justify-center-safe text-center text-3xl font-bold text-black">
              or visit mtnbroadband.ng@mtn.com
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>

      {/* Nav */}
      <motion.nav
        id="nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn([
          "bg-accent mx-auto px-8 py-4 transition-all lg:px-12 xl:px-24 2xl:px-24",
          isScrolled ? "fixed top-0 right-0 left-0 z-50 shadow-md" : "relative",
        ])}
      >
        <div className="flex h-9 w-full items-center justify-between">
          {/* Mobile Menu */}
          <MobileNav />

          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2" prefetch={false}>
              <Image
                className="h-auto w-20"
                src={colorMode === "light" ? images.icon : images.icon2}
                alt="MTN Logo"
                priority
                width={120}
                height={30}
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </Link>
          </motion.div>

          {/* Menu and Input */}
          <div className="flex items-center justify-start gap-2">
            <AllProductsMenu />

            <InputGroup
              colorPalette="primary"
              className="input-group min-w-96"
              startElement={<Search size={18} strokeWidth={1.5} />}
            >
              <Input className="input" placeholder="Search by products, brands & categories" />
            </InputGroup>
          </div>

          {/* Icons */}
          <div className="flex flex-[0.7] items-center justify-end gap-2">
            <ColorModeButton />

            {/* Avatar */}
            <Menu.Root open={iconMenuOpen} onOpenChange={e => setIconMenuOpen(e.open)}>
              <Menu.Trigger outline="none" onMouseEnter={() => setIconMenuOpen(true)}>
                <Stack direction="row" gap={2}>
                  <Avatar.Root size="sm" className="bg-muted rounded-full">
                    <Avatar.Fallback />
                  </Avatar.Root>

                  <div className="flex items-center justify-start gap-2 text-sm font-medium">
                    Account <ChevronDown size={16} />
                  </div>
                </Stack>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="account">Login/Sign Up</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            {/* Notifications */}
            <Popover.Root>
              <Popover.Trigger asChild>
                <IconButton aria-label="Notifications" variant="ghost">
                  <Bell size={24} />
                </IconButton>
              </Popover.Trigger>
              <Portal>
                <Popover.Positioner>
                  <Popover.Content>
                    <Popover.Arrow />
                    <Popover.Body>
                      <Popover.Title fontWeight="semibold">Notifications</Popover.Title>
                      <Text my="4">You have no notifications</Text>
                    </Popover.Body>
                  </Popover.Content>
                </Popover.Positioner>
              </Portal>
            </Popover.Root>

            {/* Cart */}
            <IconButton asChild aria-label="Cart" variant="ghost">
              <Link href="/checkout/cart">
                <ShoppingCart size={24} />
              </Link>
            </IconButton>
          </div>
        </div>
      </motion.nav>

      {/* Spacer when nav is fixed */}
      {isScrolled && <div className="h-16" />}
    </header>
  );
}
