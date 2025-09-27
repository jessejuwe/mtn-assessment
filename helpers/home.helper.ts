import type { LucideProps } from "lucide-react";
import { ArrowRight, BriefcaseBusiness, Cloud, RefreshCcwDot, Router, Smartphone, Wifi } from "lucide-react";

type CategoryType = {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  label: string;
  link: string;
};

export const CATEGORIES: CategoryType[] = [
  { icon: Wifi, label: "FibreX", link: "/fibrex" },
  { icon: Router, label: "Devices", link: "/devices" },
  { icon: RefreshCcwDot, label: "Airtime", link: "/airtime" },
  { icon: Smartphone, label: "Data", link: "/data" },
  { icon: BriefcaseBusiness, label: "Business", link: "/business" },
  { icon: Cloud, label: "Cloud", link: "/cloud" },
];

type BestSellerType = {
  className: string;
  title: string;
  price: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  link: string;
};

export const BEST_SELLERS: BestSellerType[] = [
  {
    className: "bg-linear-to-br from-[#e6bca0] via-[#eee3c9] to-[#fbf2ed]",
    title: "FibreX Base Plan",
    price: "",
    icon: ArrowRight,
    link: "/fibrex-base-plan",
  },
  {
    className: "bg-linear-to-br from-[#fcb216] via-[#fce050] to-[#ffea07]",
    title: "5G Broadband Router",
    price: "80000",
    icon: ArrowRight,
    link: "/5g-broadband-router",
  },
  {
    className: "bg-linear-to-br from-[#37394b] via-[#515366] to-[#a2a8ba] text-white",
    title: "MTN Broadband MiFi",
    price: "15000",
    icon: ArrowRight,
    link: "/mtn-broadband-mifi",
  },
  {
    className: "bg-linear-to-br from-[#101011] via-[#2b2b2b] to-[##4b4551] text-white",
    title: "4G Router (Premium)",
    price: "40000",
    icon: ArrowRight,
    link: "/4g-router-premium",
  },
  {
    className: "bg-linear-to-br from-[#0f0f10] via-[#252525] to-[#1f1f1f] text-white",
    title: "4G Router (Standard)",
    price: "20000",
    icon: ArrowRight,
    link: "/4g-router-standard",
  },
  {
    className: "bg-linear-to-br from-[#ddcc86] via-[#e9e0b8] to-[#fdfcf8]",
    title: "EyeSyte 4G Surveillance",
    price: "195500",
    icon: ArrowRight,
    link: "/eyesyte-4g-surveillance",
  },
  {
    className: "bg-linear-to-br from-[#0f0f0d] via-[#232323] to-[#0f0f0d] text-white",
    title: "EyeSyte Smart PTZ Camera",
    price: "25000",
    icon: ArrowRight,
    link: "/eyesyte-smart-ptz-camera",
  },
  {
    className: "bg-linear-to-br from-[#dcade4] via-[#e5d7ef] to-[#f5e5cb]",
    title: "EyeSyte Battery Camera",
    price: "93000",
    icon: ArrowRight,
    link: "/eyesyte-battery-camera",
  },
];
