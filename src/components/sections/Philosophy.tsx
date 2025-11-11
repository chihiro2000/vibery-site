"use client";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LINKS } from "@/config/links";

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    window.open(LINKS.appStore, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-8 md:py-16 relative bg-white overflow-hidden">
      <Container className="overflow-visible">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
            {/* メインメッセージ */}
            <div
              className={`
                transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-mono-950 leading-[1.4] tracking-tight">
                センスの合う友達が、
                <br />
                <span className="text-mono-700">ちゃんと見つかる時代へ</span>
              </h2>
            </div>

            {/* 装飾的な区切り線 */}
            <div
              className={`
                flex items-center gap-4
                transition-all duration-1000 ease-out delay-200
                ${isVisible ? "opacity-100" : "opacity-0"}
              `}
            >
              <div className="w-12 h-[2px] bg-gradient-to-r from-mono-950 to-mono-400"></div>
              <div className="w-2 h-2 rounded-full bg-mono-950"></div>
            </div>

            {/* サブテキスト */}
            <div
              className={`
                transition-all duration-1000 ease-out delay-300
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              <p className="text-lg md:text-xl text-mono-600 leading-relaxed font-light">
                感性でつながる、新しい出会いの形。
                <br />
                安心・安全な同性限定コミュニティ。
              </p>
            </div>

            {/* CTAボタン */}
            <div
              className={`
                transition-all duration-1000 ease-out delay-500
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              <Button
                variant="primary"
                size="lg"
                className="font-semibold text-base md:text-lg"
                onClick={handleDownload}
              >
                Viberyをダウンロード
              </Button>
            </div>
          </div>

          {/* 右側: 不規則に重ねた画像コラージュ */}
          <div className="relative h-[450px] md:h-[550px] lg:h-[650px] order-1 lg:order-2">
            {/* 画像1: 左上 - ホバーで浮き上がる */}
            <div
              className={`
                absolute top-0 left-0 w-52 md:w-60 lg:w-72 aspect-square
                transition-all duration-1000 ease-out
                hover:scale-110 hover:rotate-[-2deg] hover:z-50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                cursor-pointer
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 rotate-[-4deg]"
                    : "opacity-0 translate-y-8 rotate-0"
                }
              `}
              style={{
                zIndex: 4,
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] border-[6px] border-white transition-all duration-500">
                <Image
                  src="/images/hero/hero6.webp"
                  alt="Vibery community"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={90}
                  sizes="(max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
                />
              </div>
            </div>

            {/* 画像2: 右上 - ホバーで浮き上がる */}
            <div
              className={`
                absolute top-12 right-0 md:top-16 md:right-8 lg:top-20 lg:right-16
                w-48 md:w-56 lg:w-64 aspect-square
                transition-all duration-1000 ease-out delay-200
                hover:scale-110 hover:rotate-[4deg] hover:z-50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                cursor-pointer
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 rotate-[6deg]"
                    : "opacity-0 translate-y-8 rotate-0"
                }
              `}
              style={{
                zIndex: 3,
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] border-[6px] border-white transition-all duration-500">
                <Image
                  src="/images/hero/hero4.webp"
                  alt="Vibery community"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={90}
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>

            {/* 画像3: 左下 - ホバーで浮き上がる */}
            <div
              className={`
                absolute bottom-28 left-16 md:bottom-36 md:left-20 lg:bottom-44 lg:left-24
                w-44 md:w-52 lg:w-60 aspect-square
                transition-all duration-1000 ease-out delay-400
                hover:scale-110 hover:rotate-[1deg] hover:z-50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                cursor-pointer
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 rotate-[3deg]"
                    : "opacity-0 translate-y-8 rotate-0"
                }
              `}
              style={{
                zIndex: 2,
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] border-[6px] border-white transition-all duration-500">
                <Image
                  src="/images/hero/hero3.webp"
                  alt="Vibery community"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={90}
                  sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                />
              </div>
            </div>

            {/* 画像4: 右下 - ホバーで浮き上がる */}
            <div
              className={`
                absolute bottom-0 right-8 md:bottom-12 md:right-16 lg:bottom-16 lg:right-20
                w-48 md:w-56 lg:w-64 aspect-square
                transition-all duration-1000 ease-out delay-600
                hover:scale-110 hover:rotate-[-3deg] hover:z-50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                cursor-pointer
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 rotate-[-5deg]"
                    : "opacity-0 translate-y-8 rotate-0"
                }
              `}
              style={{
                zIndex: 1,
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] border-[6px] border-white transition-all duration-500">
                <Image
                  src="/images/hero/hero16.webp"
                  alt="Vibery community"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={90}
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 背景の装飾 */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-mono-200/30 rounded-full blur-3xl -z-10 opacity-40"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-mono-200/30 rounded-full blur-3xl -z-10 opacity-30"></div>
    </section>
  );
}
