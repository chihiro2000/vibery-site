import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { ConversationSection } from "@/components/sections/ConversationSection";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <ConversationSection />
      <DownloadCTA />
    </>
  );
}
