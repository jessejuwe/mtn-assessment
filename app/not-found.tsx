import { Metadata } from "next";

import { NotFound as NotFoundPage } from "@/components/shared";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return <NotFoundPage />;
}
