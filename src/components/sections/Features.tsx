"use client";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const features = [
  {
    title: "同性限定だから、安心できる。",
    description: "恋愛目的を排除し、同性だけなので、\n変な人はいません！",
    icon: "01",
    highlight: "SAFETY & RELATABILITY",
  },
  {
    title: "投稿は、フレンドにだけ。",
    description:
      "あなたの投稿はフレンドだけに届きます。\nだからこそ、自由に投稿にできます。",
    icon: "02",
    highlight: "PRIVATE SHARING",
  },
  {
    title: "趣味タグで、自然につながる。",
    description: "タグから相手を探して、\n自然につながれる仕組みです。",
    icon: "03",
    highlight: "TAG-BASED MATCHING",
  },
];

// 1-10の画像を順番通りに配列
const appImages = [
  "/images/feature/f1.jpg",
  "/images/feature/f2.jpg",
  "/images/feature/f3.jpg",
  "/images/feature/f4.jpg",
  "/images/feature/f5.jpg",
  "/images/feature/f6.jpg",
  "/images/feature/f7.jpg",
  "/images/feature/f8.jpg",
  "/images/feature/f9.jpg",
  "/images/feature/f10.jpg",
];

export function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobilePaused, setIsMobilePaused] = useState(false);

  // モバイル機能カード: 時間で素早く切り替わる
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // PC UI: 無限ループスクロール（画像）1-10の順番で
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.6; // 少し早めに調整
    const imageWidth = 240; // w-56 + gap

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;

        // 1セット分（10枚）移動したらリセット
        if (scrollPosition >= imageWidth * 10) {
          scrollPosition = 0;
        }

        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isPaused]);

  // モバイル UI: 自動スクロール
  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8; // モバイルは少し早め
    const imageWidth = 240; // w-56 + gap

    const animate = () => {
      if (!isMobilePaused) {
        scrollPosition += scrollSpeed;

        // 1セット分（10枚）移動したらリセット
        if (scrollPosition >= imageWidth * 10) {
          scrollPosition = 0;
        }

        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    const handleTouchStart = () => setIsMobilePaused(true);
    const handleTouchEnd = () => {
      setTimeout(() => setIsMobilePaused(false), 2000); // 2秒後に再開
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobilePaused]);

  // 1-10を3回繰り返した配列を作成（スムーズな無限ループのため）
  const infiniteImages = [...appImages, ...appImages, ...appImages];

  return (
    <section className="py-4 md:py-8 relative">
      <div className="section-divider mb-8 md:mb-16"></div>

      <Container>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-mono-50">
            Features
          </h2>
          <p className="text-lg md:text-xl text-mono-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
            従来のSNSや出会い系アプリとは違う、
            <br className="hidden md:block" />
            友達づくりに特化した環境を提供
          </p>
        </div>

        {/* 機能説明セクション */}
        <div className="mb-8 md:mb-16">
          {/* PC: グリッドレイアウト */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 glass rounded-xl hover:bg-mono-50/5 transition-all duration-500 hover:scale-105 glow-subtle"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-4xl font-display font-bold text-mono-700 group-hover:text-mono-600 transition-colors">
                      {feature.icon}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-mono-600 group-hover:text-mono-500 transition-colors">
                      {feature.highlight}
                    </span>
                  </div>
                  <div className="w-8 h-px bg-mono-700 group-hover:bg-mono-500 transition-colors mb-4"></div>
                </div>

                <h3 className="text-xl font-display font-bold mb-4 text-mono-100 group-hover:text-mono-50 transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="text-mono-400 leading-relaxed group-hover:text-mono-300 transition-colors text-sm whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* モバイル: 1つずつ切り替わる */}
          <div className="lg:hidden px-2">
            <div className="relative h-56 md:h-64 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-full max-w-sm transition-all duration-700 ease-in-out"
                  key={currentFeatureIndex}
                >
                  <div className="p-5 md:p-6 glass rounded-xl animate-fade-in">
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        <span className="text-2xl md:text-3xl font-display font-bold text-mono-700">
                          {features[currentFeatureIndex].icon}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-mono-600">
                          {features[currentFeatureIndex].highlight}
                        </span>
                      </div>
                      <div className="w-6 md:w-8 h-px bg-mono-700 mb-3 md:mb-4"></div>
                    </div>

                    <h3 className="text-base md:text-lg font-display font-bold mb-2 md:mb-3 text-mono-100 leading-tight">
                      {features[currentFeatureIndex].title}
                    </h3>
                    <p className="text-mono-400 leading-relaxed text-xs md:text-sm whitespace-pre-line">
                      {features[currentFeatureIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* インジケーター */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                      index === currentFeatureIndex
                        ? "bg-mono-50 scale-125"
                        : "bg-mono-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* アプリUI画像ギャラリー - 画面最大幅 */}
      <div>
        {/* PC: 画面最大幅で1-10順番でループ */}
        <div className="hidden lg:block">
          <div className="w-screen overflow-hidden bg-mono-950 pt-8 pb-4">
            <div className="relative h-[560px]">
              <div
                ref={scrollRef}
                className="flex gap-6 absolute top-0 left-0 pl-8"
                style={{
                  width: `${
                    240 * infiniteImages.length +
                    6 * (infiniteImages.length - 1) +
                    32
                  }px`,
                }}
              >
                {infiniteImages.map((image, index) => (
                  <div key={`pc-${index}`} className="flex-none">
                    <div className="relative w-56 lg:w-[360px] h-[560px]">
                      <div className="absolute inset-0 bg-mono-900 rounded-[2.5rem] p-2 shadow-2xl">
                        <div className="relative w-full h-full bg-mono-950 rounded-[2rem] overflow-hidden">
                          <Image
                            src={image}
                            alt={`App interface ${(index % 10) + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-mono-950 rounded-full z-10"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* モバイル: 自動スクロール */}
        <div className="lg:hidden">
          <Container>
            <div className="overflow-hidden rounded-xl bg-mono-950 py-4 md:py-6">
              <div className="relative h-[400px] md:h-[480px]">
                <div
                  ref={mobileScrollRef}
                  className="flex gap-3 md:gap-4 absolute top-0 left-0 pl-2"
                  style={{
                    width: `${(256 + 12) * infiniteImages.length + 8}px`, // w-64 + gap
                  }}
                >
                  {infiniteImages.map((image, index) => (
                    <div key={`mobile-${index}`} className="flex-none">
                      <div className="relative w-56 md:w-64 h-[380px] md:h-[460px]">
                        <div className="absolute inset-0 bg-mono-900 rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 shadow-2xl">
                          <div className="relative w-full h-full bg-mono-950 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                            <Image
                              src={image}
                              alt={`App interface ${(index % 10) + 1}`}
                              fill
                              className="object-contain"
                              priority={index < 3} // 最初の3枚は優先読み込み
                            />
                          </div>
                        </div>
                        <div className="absolute top-1.5 md:top-2 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-4 md:h-6 bg-mono-950 rounded-full z-10"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.7s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
