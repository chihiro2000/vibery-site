import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
