import React, { useRef, useState } from "react";
import { Box, Button, IconButton, Show, Stack } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import { BEST_SELLERS } from "@/helpers/home.helper";
import { cn, formatCurrency } from "@/utils/utils";

export default function BestSellers() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef<any>(null);

  return (
    <div className="mb-20 block w-full">
      <div className="mb-8 flex items-center justify-between px-4">
        <p className="text-[40px] font-extrabold">Best Sellers</p>

        {/* Controls */}
        <Stack align="center" colorPalette={{ _light: "black", _dark: "primary" }} direction="row" gap={8}>
          <Stack align="center" direction="row" gap={4}>
            <IconButton
              aria-label="Previous"
              borderColor={{ _light: "black", _dark: "primary" }}
              disabled={isBeginning}
              fontWeight={600}
              rounded="full"
              variant="outline"
              _hover={{
                bgColor: { _light: "primary.400", _dark: "" },
                borderColor: { _light: "primary.400", _dark: "" },
              }}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              aria-label="Next"
              borderColor={{ _light: "black", _dark: "primary" }}
              disabled={isEnd}
              fontWeight={600}
              rounded="full"
              variant="outline"
              _hover={{
                bgColor: { _light: "primary.400", _dark: "" },
                borderColor: { _light: "primary.400", _dark: "" },
              }}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight />
            </IconButton>
          </Stack>

          <Button
            aria-label="View All"
            borderColor={{ _light: "black", _dark: "primary" }}
            fontWeight={600}
            rounded="full"
            variant="outline"
            _hover={{
              bgColor: { _light: "primary.400", _dark: "" },
              borderColor: { _light: "primary.400", _dark: "" },
            }}
          >
            View All
          </Button>
        </Stack>
      </div>

      {/* Swiper */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Swiper
          id="best-seller-swiper"
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 12 },
            390: { slidesPerView: 1.2, spaceBetween: 12 },
            412: { slidesPerView: 1.2, spaceBetween: 12 },
            540: { slidesPerView: 1.5, spaceBetween: 12 },
            768: { slidesPerView: 2.1, spaceBetween: 12 },
            820: { slidesPerView: 2.2, spaceBetween: 12 },
            1024: { slidesPerView: 2.7, spaceBetween: 12 },
            1280: { slidesPerView: 3.5, spaceBetween: 12 },
            1440: { slidesPerView: 4.7, spaceBetween: 12 },
          }}
          className="h-full min-h-[360px] w-full"
          direction={"horizontal"}
          grabCursor
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          modules={[Mousewheel]}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={swiper => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={swiper => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={swiper => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          watchSlidesProgress
        >
          {BEST_SELLERS.map((item, index) => (
            <SwiperSlide key={index} className="py-6">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  className={cn([
                    "flex h-[360px] w-[250px] flex-col items-start justify-between rounded-xl p-6",
                    item.className,
                  ])}
                >
                  <Stack gap={6}>
                    <p className="text-[26px] font-bold">{item.title}</p>
                    <Show when={item.price}>
                      <div className="flex flex-col items-start gap-2">
                        <p className="font-semibold">Price</p>
                        <p className="text-xl font-bold">{formatCurrency(+item.price)}</p>
                      </div>
                    </Show>
                  </Stack>

                  <item.icon size={36} />
                </Box>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
