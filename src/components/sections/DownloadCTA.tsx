"use client";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/config/links";

export function DownloadCTA() {
  const handleDownload = () => {
    window.open(LINKS.appStore, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-3 md:py-8 relative bg-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-5 text-mono-950 capitalize">
            Feel the vibe,
            <br className="hidden md:block" />
            Find your people
          </h2>

          <p className="text-xl text-mono-600 mb-8 leading-relaxed font-light">
            同性限定の新しいSNS。
            <br className="hidden md:block" />
            Vibeから始まる、新しい友達を探そう!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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

      {/* 背景の装飾 */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-mono-200/30 rounded-full blur-3xl -z-10 opacity-40"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-mono-200/30 rounded-full blur-3xl -z-10 opacity-30"></div>
    </section>
  );
}
