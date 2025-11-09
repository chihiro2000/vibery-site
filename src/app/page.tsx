import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { Features } from "@/components/sections/Features";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      {/* <Features /> */}
      <DownloadCTA />
    </>
  );
}
