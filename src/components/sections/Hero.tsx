import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden mt-16 pb-20">
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
        {/* Desktop Background */}
        <div className="absolute inset-0 hidden md:block bg-[url('/images/hero/heroPc.jpg')] bg-cover bg-center bg-no-repeat"></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-mono-950/60"></div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30"></div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-mono-50/3 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-mono-50/2 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <Container className="relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Vibery Brand Title - 正しいBebas Neue */}
          <div className="mb-12">
            <h2 className="bebas-title text-mono-50 drop-shadow-2xl">VIBERY</h2>
          </div>

          {/* Main heading */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl japanese-title mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
              <span className="block text-mono-50">同性限定の</span>
              <span className="block text-gradient mt-2">友達探しSNS</span>
            </h1>

            <div className="w-24 h-px bg-mono-400 mx-auto mb-12"></div>

            <p className="text-lg md:text-xl lg:text-2xl text-mono-200 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
              このアプリでは、趣味や価値観で自然につながれる。
              <br className="hidden md:block" />
              <span className="text-mono-100 font-medium">
                恋愛目的の人はいないから、ちゃんと探せる！
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="primary"
              size="xl"
              className="min-w-[280px] font-semibold shadow-2xl"
            >
              <span className="mr-3">📱</span>
              App Storeでダウンロード
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="min-w-[200px] backdrop-blur-sm"
            >
              詳しく見る
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
