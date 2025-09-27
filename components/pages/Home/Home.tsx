"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Box, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { images, placeholders } from "@/constants";
import { CATEGORIES } from "@/helpers/home.helper";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const BestSellers = dynamic(() => import("./BestSellers"), { ssr: false, loading: () => <div /> });
const Features = dynamic(() => import("./Features"), { ssr: false, loading: () => <div /> });

function Home() {
  return (
    <main className="border-b-border bg-muted overflow-x-hidden border-b px-8 transition-all lg:px-12 xl:px-24 2xl:px-24">
      <motion.section
        id="hero"
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="landscapeShort:h-[50vh] mb-12 block h-screen md:h-[75vh] lg:h-[60vh] lg:max-h-[520px]"
      >
        <div className="mb-4">
          <Link href="/fibrex">
            <Image
              src={images.banner}
              alt="Hero Banner"
              className="object-cover object-top"
              placeholder="blur"
              blurDataURL={placeholders.banner}
            />
          </Link>
        </div>

        <motion.div
          className="mx-auto flex w-full items-center justify-center pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack direction="row" flexWrap="wrap" gap={4}>
            {CATEGORIES.map((category, index) => (
              <Link key={index} href={category.link}>
                <Box className="hover:bg-primary flex size-36 items-center justify-center rounded-xl transition-all hover:text-black">
                  <Stack align="center" gap={2}>
                    <category.icon size={64} strokeWidth={1.5} />
                    <p className="font-semibold">{category.label}</p>
                  </Stack>
                </Box>
              </Link>
            ))}
          </Stack>
        </motion.div>
      </motion.section>

      <BestSellers />
      <Features />
    </main>
  );
}

export default Home;
