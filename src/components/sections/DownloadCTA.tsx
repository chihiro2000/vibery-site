"use client";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/config/links";

export function DownloadCTA() {
  const handleDownload = () => {
    window.open(LINKS.appStore, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 relative">
      <div className="section-divider mb-16"></div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-mono-50">
            Feel the Vibe,
            <br className="hidden md:block" />
            Find Your People
          </h2>

          <p className="text-xl text-mono-400 mb-12 leading-relaxed font-light">
            感性で響き合う、同性限定の新しいSNS。
            <br className="hidden md:block" />
            Vibeから始まる、新しい友達を探そう！
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <Button
              size="xl"
              variant="primary"
              className="font-semibold"
              onClick={handleDownload}
            >
              App Storeでダウンロード
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
