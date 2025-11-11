"use client";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LINKS } from "@/config/links";

export function ConversationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    window.open(LINKS.appStore, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-3 md:py-8 relative bg-white">
      <Container className="overflow-visible">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* 左側: 会話画像（PC時） */}
          <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start py-6 md:py-12 lg:py-16">
            {/* モバイル・タブレット表示 */}
            <div className="lg:hidden relative w-full max-w-sm mx-auto">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-mono-950/10 to-transparent z-10"></div>
                <Image
                  src="/images/conversation/conversation.webp"
                  alt="友達同士の自然な会話の例"
                  fill
                  className="object-contain"
                  quality={90}
                  priority
                  sizes="(max-width: 1024px) 384px, 0px"
                />
              </div>
              {/* 装飾的な光 */}
              <div className="absolute -inset-3 bg-mono-200/20 rounded-2xl blur-xl -z-10"></div>
            </div>

            {/* PC表示 */}
            <div className="hidden lg:block relative w-full max-w-md">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-mono-950/10 to-transparent z-10"></div>
                <Image
                  src="/images/conversation/conversation.webp"
                  alt="友達同士の自然な会話の例"
                  fill
                  className="object-contain"
                  quality={90}
                  priority
                  sizes="(min-width: 1024px) 448px, 0px"
                />
              </div>
              {/* 装飾的な光 */}
              <div className="absolute -inset-4 bg-mono-200/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>

          {/* 右側: テキストコンテンツ（PC時） */}
          <div className="order-1 lg:order-2 space-y-5 md:space-y-6">
            <div>
              {/* タイトル - 1行目: フェードイン */}
              <h2
                className={`
                  text-4xl md:text-5xl lg:text-6xl font-display font-bold 
                  text-mono-950 leading-tight capitalize
                  transition-all duration-1000 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
              >
                From here
              </h2>
              {/* タイトル - 2行目: 遅れて力強く */}
              <h2
                className={`
                  text-4xl md:text-5xl lg:text-6xl font-display font-bold 
                  text-mono-950 leading-tight mb-5 capitalize
                  transition-all duration-1000 ease-out delay-300
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
              >
                A new friendship begins
              </h2>
              <div className="w-16 h-1 bg-mono-800 mb-5 md:mb-6"></div>
            </div>

            {/* サブタイトル */}
            <div
              className={`
                text-xl md:text-2xl text-mono-600 leading-loose tracking-wide
                transition-all duration-1000 ease-out delay-500
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              <p className="font-light">
                ここから新しい友情の物語が始まります。
                <br className="hidden md:block" />
                共通の趣味や価値観から自然に会話が始まり、
                <br className="hidden md:block" />
                深い友情へと発展していきます。
              </p>
            </div>

            {/* CTAボタン */}
            <div
              className={`
                transition-all duration-1000 ease-out delay-700
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
                className="font-semibold"
                onClick={handleDownload}
              >
                今すぐ友達を見つける！
              </Button>
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
