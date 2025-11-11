import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { Philosophy } from "@/components/sections/Philosophy";
import { ConversationSection } from "@/components/sections/ConversationSection";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Concept />
      <ConversationSection />
      <DownloadCTA />
    </>
  );
}
