"use client";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-2 md:py-4 relative bg-white overflow-hidden">
      <div className="section-divider mb-3 md:mb-4"></div>

      <Container className="overflow-visible">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* 1つ目のメッセージ */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-mono-950 leading-relaxed tracking-wide">
                出会いは、偶然じゃなく、
                <br />
                感性で選ぶ時代へ。
              </h2>
            </div>

            {/* 装飾線 */}
            <div
              className={`
                w-16 h-px bg-mono-400
                transition-all duration-1000 ease-out delay-300
                ${isVisible ? "opacity-100" : "opacity-0"}
              `}
            ></div>

            {/* 2つ目のメッセージ */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-mono-950 leading-relaxed tracking-wide">
                数ではなく、
                <br />
                波長でつながる。
              </h2>
            </div>

            {/* 装飾線 */}
            <div
              className={`
                w-16 h-px bg-mono-400
                transition-all duration-1000 ease-out delay-700
                ${isVisible ? "opacity-100" : "opacity-0"}
              `}
            ></div>

            {/* 3つ目のメッセージ */}
            <div
              className={`
                transition-all duration-1000 ease-out delay-[900ms]
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-mono-950 leading-relaxed tracking-wide">
                Vibery──
                <br />
                感性から生まれる、
                <br />
                新しい関係。
              </h2>
            </div>
          </div>

          {/* 右側: 不規則に重ねた画像コラージュ */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
            {/* 画像1: 左上 - 少し回転 */}
            <div
              className={`
                absolute top-0 left-0 w-48 md:w-56 lg:w-64 aspect-square
                transition-all duration-1000 ease-out
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
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero/hero1.webp"
                  alt="Vibery community"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>

            {/* 画像2: 右上 - 少し回転 */}
            <div
              className={`
                absolute top-8 right-0 md:top-12 md:right-8 lg:top-16 lg:right-12 
                w-44 md:w-52 lg:w-60 aspect-square
                transition-all duration-1000 ease-out delay-200
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
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero/hero2.webp"
                  alt="Vibery community"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                />
              </div>
            </div>

            {/* 画像3: 左下 - 少し回転 */}
            <div
              className={`
                absolute bottom-24 left-12 md:bottom-32 md:left-16 lg:bottom-40 lg:left-20
                w-40 md:w-48 lg:w-56 aspect-square
                transition-all duration-1000 ease-out delay-400
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
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero/hero3.webp"
                  alt="Vibery community"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                />
              </div>
            </div>

            {/* 画像4: 右下 - 少し回転 */}
            <div
              className={`
                absolute bottom-0 right-4 md:bottom-8 md:right-12 lg:bottom-12 lg:right-16
                w-44 md:w-52 lg:w-60 aspect-square
                transition-all duration-1000 ease-out delay-600
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
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero/hero4.webp"
                  alt="Vibery community"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
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
