"use client";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function DownloadCTA() {
  const handleDownload = () => {
    window.open(
      "https://apps.apple.com/jp/app/vibery-%E5%8F%8B%E9%81%94%E4%BD%9C%E3%82%8A-%E8%B6%A3%E5%91%B3-%E5%90%8C%E6%80%A7%E9%99%90%E5%AE%9Asns/id6739957098",
      "_blank",
      "noopener,noreferrer"
    );
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
