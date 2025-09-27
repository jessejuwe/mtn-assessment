"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Footer, Header } from "@/exports/exports";

// Enhanced loading animation
const LoadingScreen = () => (
  <div className="gradient-bg flex min-h-screen items-center justify-center">
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="mx-auto mb-4 h-16 w-16 rounded-full border-4 border-white border-t-transparent"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg font-medium text-white"
      >
        Loading MTN eShop Experience...
      </motion.p>
    </div>
  </div>
);

type MainLayoutProps = { children: React.ReactNode };

export default function MainLayout({ children }: MainLayoutProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-background relative min-h-screen">
      <Header />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
