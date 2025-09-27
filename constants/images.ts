import { StaticImageData } from "next/image";

import facebook from "@/public/assets/footer/facebook.svg";
import instagram from "@/public/assets/footer/instagram.svg";
import linkedin from "@/public/assets/footer/linkedin.svg";
import x from "@/public/assets/footer/x.svg";
import youtube from "@/public/assets/footer/youtube.svg";

import banner from "@/public/assets/home/banner.jpg";

import icon from "@/public/assets/shared/icon.png";
import icon2 from "@/public/assets/shared/icon2.png";
import logo from "@/public/assets/shared/logo.svg";
import notFound from "@/public/assets/shared/404.svg";

interface Images {
  facebook: StaticImageData;
  instagram: StaticImageData;
  linkedin: StaticImageData;
  x: StaticImageData;
  youtube: StaticImageData;

  banner: StaticImageData;

  icon: StaticImageData;
  icon2: StaticImageData;
  logo: StaticImageData;
  notFound: StaticImageData;
}

export const Images: Images = {
  facebook,
  instagram,
  linkedin,
  x,
  youtube,

  banner,

  icon,
  icon2,
  logo,
  notFound,
};

export const Placeholders = {
  banner: "/assets/home/blur-banner.jpg",
};
