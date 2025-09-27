import React, { useRef, useState } from "react";
import { Box, Button, IconButton, Show, Stack } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <div className="mb-20 block w-full">
      <div className="mb-8 flex items-center justify-between px-4">
        <p className="text-[40px] font-extrabold">Featured Products</p>
      </div>

      {/* Tabs */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
