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
    <main className="bg-muted overflow-x-hidden transition-all">
      <motion.section
        id="hero"
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="mb-12 block lg:max-h-[520px] xl:h-[60vh]"
      >
        <div className="mb-4">
          <Link href="/fibrex">
            <Image
              src={images.banner}
              alt="Hero Banner"
              className="object-cover object-center"
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
          <div className="grid grid-cols-3 md:grid-cols-6">
            {CATEGORIES.map((category, index) => (
              <Link key={index} href={category.link}>
                <Box className="hover:bg-primary flex size-32 items-center justify-center rounded-xl transition-all hover:text-black lg:size-36">
                  <Stack align="center" gap={2}>
                    <category.icon size={64} strokeWidth={1.5} />
                    <p className="font-semibold">{category.label}</p>
                  </Stack>
                </Box>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <div className="px-4 lg:px-12 xl:px-24 2xl:px-24">
        <BestSellers />
        <Features />
      </div>
    </main>
  );
}

export default Home;
