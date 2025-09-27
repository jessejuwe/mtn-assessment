import React from "react";
import { Tabs } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import FeatureCard from "./FeatureCard";
import { images } from "@/constants";
import { FEATURES } from "@/helpers/home.helper";

export default function Features() {
  return (
    <div className="mb-20 block w-full">
      <div className="mb-8 flex items-center justify-between px-4">
        <p className="text-[26px] font-bold lg:text-[40px] lg:font-extrabold">Featured Products</p>
      </div>

      {/* Tabs */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Tabs.Root
          colorPalette={{ _light: "black", _dark: "primary" }}
          className="w-full"
          defaultValue="mtn-fibrex"
          lazyMount
          unmountOnExit
          variant="plain"
        >
          <Tabs.List className="scrollbar-hide w-full justify-start gap-3 overflow-x-auto md:gap-6 lg:justify-center">
            {FEATURES.map((feature, index) => (
              <Tabs.Trigger
                key={index}
                borderColor={{ _light: "black", _dark: "primary.400" }}
                borderWidth={1}
                className="shrink-0"
                color={{ _light: "black", _dark: "primary.400" }}
                rounded="full"
                value={feature.value}
                _selected={{ border: "none", color: { _light: "white", _dark: "black" } }}
              >
                {feature.label}
              </Tabs.Trigger>
            ))}

            <Tabs.Indicator bg={{ _light: "black", _dark: "primary.400" }} rounded="full" />
          </Tabs.List>
          <Tabs.Content value="mtn-fibrex">
            <Swiper
              id="mtn-fibrex-swiper"
              spaceBetween={6}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                390: { slidesPerView: 1.2 },
                412: { slidesPerView: 1.2 },
                540: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.5 },
                820: { slidesPerView: 2.8 },
                1024: { slidesPerView: 3.3 },
                1280: { slidesPerView: 3.5 },
                1440: { slidesPerView: 4.7 },
              }}
              className="h-full min-h-[360px]"
              direction={"horizontal"}
              grabCursor
              mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
              modules={[Mousewheel]}
            >
              <SwiperSlide>
                <FeatureCard
                  image={images.fibrex}
                  label="FibreX Base Plan"
                  description="MTN offers truly unlimited broadband plans through..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeatureCard
                  image={images.fibrex}
                  label="FibreX Base Plan Subscription"
                  description="Please note that a new bundle purchase will automatically..."
                />
              </SwiperSlide>
            </Swiper>
          </Tabs.Content>
          <Tabs.Content value="devices">Manage your projects</Tabs.Content>
          <Tabs.Content value="data-bundles">Manage your tasks for freelancers</Tabs.Content>
          <Tabs.Content value="business">Manage your tasks for freelancers</Tabs.Content>
          <Tabs.Content value="cloud">Manage your tasks for freelancers</Tabs.Content>
        </Tabs.Root>
      </motion.div>
    </div>
  );
}
