import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "NGN") {
  let locale = "";

  switch (currency) {
    case "NGN":
      locale = "en-NG";
      break;

    case "USD":
      locale = "en-US";
      break;

    default:
      locale = "en-NG";
      break;
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
