"use client";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function Concept() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-divider mb-16"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-mono-50 leading-tight">
                Discover friends. Celebrate girlhood.
              </h2>
              <div className="w-16 h-1 bg-mono-600 mb-8"></div>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-mono-300 leading-relaxed">
              <p>
                同性だけが表示され、趣味や価値観でつながる
                <br className="hidden md:block" />
                新しいかたちのコミュニティです。
              </p>

              <p className="text-mono-400">
                恋愛目的を排除し、純粋な友情だけを育む空間。
                <br className="hidden md:block" />
                音楽、ファッション、カフェ、映画...
                <br className="hidden md:block" />
                あなたの「好き」から始まる出会いがここにあります。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-mono-50 mb-1">
                  100%
                </div>
                <div className="text-xs md:text-sm text-mono-500 font-mono uppercase">
                  Same Gender
                </div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-mono-50 mb-1">
                  Tags
                </div>
                <div className="text-xs md:text-sm text-mono-500 font-mono uppercase">
                  Based Matching
                </div>
              </div>
              <div className="glass rounded-xl p-4 text-center col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-mono-50 mb-1">
                  Safe
                </div>
                <div className="text-xs md:text-sm text-mono-500 font-mono uppercase">
                  Community
                </div>
              </div>
            </div>
          </div>

          {/* 右側: アプリUI画像 */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] lg:max-w-[360px]">
              {/* 画像表示 - アスペクト比を縦長に固定 */}
              <div className="relative aspect-[9/19.5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/concept/concept1.png"
                  alt="Viberyアプリのプロフィール画面 - タグとプレイリストで趣味がわかる"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 360px"
                  priority
                />
              </div>

              {/* 装飾的なグロー効果 */}
              <div className="absolute -inset-4 bg-gradient-to-br from-mono-50/5 to-mono-50/0 rounded-[3rem] blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </Container>

      {/* 背景の装飾 */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-mono-50/2 rounded-full blur-3xl -z-10 opacity-30"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-mono-50/2 rounded-full blur-3xl -z-10 opacity-20"></div>
    </section>
  );
}
