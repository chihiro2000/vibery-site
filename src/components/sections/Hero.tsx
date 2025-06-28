import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden mt-0 pb-16">
      {/* Background Images - Responsive */}
      <div className="absolute inset-0">
        {/* Mobile Background - 拡大表示 & 少し上寄せ */}
        <div
          className="absolute inset-0 md:hidden
            bg-[url('/images/hero/heroMobile.jpg')]
            bg-[length:130%_auto]
            bg-[position:50%_25%]
            bg-no-repeat"
        ></div>
        {/* Desktop Background - 上寄せ表示 */}
        <div
          className="absolute inset-0 hidden md:block
            bg-[url('/images/hero/heroPc.jpg')]
            bg-cover
            bg-top
            bg-no-repeat"
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-mono-950/60"></div>
      </div>

      {/* Background Grid */}
      <div
        className="absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),
             linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)]
        bg-[size:80px_80px]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]
        opacity-30
      "
      ></div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-mono-50/3 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-mono-50/2 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* メインタイトル */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-mono-50 drop-shadow-2xl">
            Find your people
          </h1>

          {/* サブタイトル */}
          <h2 className="text-xl md:text-2xl text-mono-200 font-light tracking-wide">
            同性限定の友達探しSNS
          </h2>

          {/* CTAボタン */}
          <Button
            variant="primary"
            size="xl"
            className="min-w-[280px] font-semibold shadow-2xl"
          >
            今すぐダウンロード
          </Button>
        </div>
      </Container>

      {/* スクロールインジケーター - Container外に配置 */}
      <ScrollIndicator />
    </section>
  );
}
