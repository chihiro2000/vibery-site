import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";

import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <DownloadCTA />
    </>
  );
}
