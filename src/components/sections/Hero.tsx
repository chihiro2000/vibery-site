"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { LINKS } from "@/config/links";

// 24枚の画像パス
const images = Array.from(
  { length: 24 },
  (_, i) => `/images/hero/hero${i + 1}.webp`
);

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 3列のスクロールアニメーション
  useEffect(() => {
    const col1 = column1Ref.current;
    const col2 = column2Ref.current;
    const col3 = column3Ref.current;

    if (!col1 || !col2 || !col3) return;

    let animationId: number;
    let scrollPosition1 = 0;
    let scrollPosition2 = 0;
    let scrollPosition3 = 0;

    const scrollSpeed = 0.5;
    const imageHeight = 300;
    const gap = 16;
    const itemHeight = imageHeight + gap;

    const col1Images = 8;
    const col2Images = 8;
    const col3Images = 8;

    const totalHeight1 = itemHeight * col1Images;
    const totalHeight2 = itemHeight * col2Images;
    const totalHeight3 = itemHeight * col3Images;

    const initialOffset1 = totalHeight1;
    const initialOffset3 = totalHeight3 * 0.6;

    col1.style.transform = `translateY(-${initialOffset1}px)`;
    col3.style.transform = `translateY(-${initialOffset3}px)`;

    scrollPosition1 = initialOffset1;
    scrollPosition3 = initialOffset3;

    const animate = () => {
      scrollPosition1 -= scrollSpeed;
      if (scrollPosition1 <= 0) {
        scrollPosition1 = totalHeight1;
      }
      col1.style.transform = `translateY(-${scrollPosition1}px)`;

      scrollPosition2 += scrollSpeed;
      if (scrollPosition2 >= totalHeight2) {
        scrollPosition2 = 0;
      }
      col2.style.transform = `translateY(-${scrollPosition2}px)`;

      scrollPosition3 -= scrollSpeed * 0.85;
      if (scrollPosition3 <= 0) {
        scrollPosition3 = totalHeight3;
      }
      col3.style.transform = `translateY(-${scrollPosition3}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleDownload = () => {
    window.open(LINKS.appStore, "_blank", "noopener,noreferrer");
  };

  // 画像を3列に均等分配（各列8枚ずつ）
  const col1Images = images.slice(0, 8);
  const col2Images = images.slice(8, 16);
  const col3Images = images.slice(16, 24);

  // 各列を3回繰り返してシームレスループ
  const repeatedCol1 = [...col1Images, ...col1Images, ...col1Images];
  const repeatedCol2 = [...col2Images, ...col2Images, ...col2Images];
  const repeatedCol3 = [...col3Images, ...col3Images, ...col3Images];

  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex flex-col bg-white">
      {/* Background Grid with Scrolling Columns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 3列グリッド */}
        <div className="absolute inset-0 flex gap-4 px-4">
          {/* 列1: 上向きスクロール (1-8) */}
          <div className="flex-1 relative overflow-hidden">
            <div
              ref={column1Ref}
              className="flex flex-col gap-4 will-change-transform"
            >
              {repeatedCol1.map((src, index) => (
                <div
                  key={`col1-${index}`}
                  className="w-full aspect-square flex-shrink-0 overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      filter:
                        "brightness(1.08) contrast(0.95) saturate(1.05) hue-rotate(3deg)",
                    }}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 列2: 下向きスクロール (9-16) */}
          <div className="flex-1 relative overflow-hidden">
            <div
              ref={column2Ref}
              className="flex flex-col gap-4 will-change-transform"
            >
              {repeatedCol2.map((src, index) => (
                <div
                  key={`col2-${index}`}
                  className="w-full aspect-square flex-shrink-0 overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      filter:
                        "brightness(1.08) contrast(0.95) saturate(1.05) hue-rotate(3deg)",
                    }}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 列3: 上向きスクロール (17-24) */}
          <div className="flex-1 relative overflow-hidden">
            <div
              ref={column3Ref}
              className="flex flex-col gap-4 will-change-transform"
            >
              {repeatedCol3.map((src, index) => (
                <div
                  key={`col3-${index}`}
                  className="w-full aspect-square flex-shrink-0 overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      filter:
                        "brightness(1.08) contrast(0.95) saturate(1.05) hue-rotate(3deg)",
                    }}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Light Overlay for Brightness - 控えめに */}
        <div className="absolute inset-0 bg-white/20 md:bg-white/25 z-10"></div>

        {/* Warm Tone Overlay - 控えめに */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/20 md:to-white/18 z-10"></div>

        {/* Extra Light Gradient for Mobile Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent md:hidden z-10"></div>

        {/* Subtle Noise Grain */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex items-end md:items-center justify-start md:justify-center pb-32 md:pb-0">
        <div
          className={`
            px-6 md:px-8 w-full md:max-w-5xl
            transition-all duration-[2000ms] ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <div className="text-left md:text-center">
            {/* Main Copy - English */}
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6"
              style={{
                textShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              FIND YOUR PEOPLE
            </h1>

            {/* Sub Copy - Japanese */}
            <p
              className="text-base md:text-lg lg:text-xl text-white/95 font-light tracking-[0.08em] md:tracking-[0.1em] leading-relaxed mb-8 md:mb-12"
              style={{
                textShadow:
                  "0 2px 8px rgba(0, 0, 0, 0.35), 0 1px 3px rgba(0, 0, 0, 0.25)",
              }}
            >
              同性限定でつながるSNS
            </p>

            {/* CTA Button */}
            <div className="flex justify-start md:justify-center">
              <Button
                variant="outline"
                size="lg"
                className="
                  px-8 py-4 md:px-10 md:py-5
                  bg-white/[0.08] hover:bg-white/[0.15]
                  backdrop-blur-xl
                  border border-white/20 hover:border-white/30
                  text-white font-bold tracking-[0.08em]
                  hover:text-white
                  shadow-[0_4px_24px_rgba(0,0,0,0.2)]
                  hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                  hover:scale-[1.03]
                  transition-all duration-500
                  rounded-full
                  text-sm md:text-base
                  relative overflow-hidden
                  group
                "
                onClick={handleDownload}
              >
                <span className="relative z-10">今すぐダウンロード</span>
                {/* 上品なホバー時のグロー */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`
          transition-all duration-[2000ms] ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        <ScrollIndicator />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-10"></div>
    </section>
  );
}
