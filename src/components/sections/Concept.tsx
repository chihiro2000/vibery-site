"use client";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useEffect, useState } from "react";

// 6枚のカード画像
const cardImages = [
  "/images/concept/concept1.jpg",
  "/images/concept/concept2.jpg",
  "/images/concept/concept3.jpg",
  "/images/concept/concept4.jpg",
  "/images/concept/concept5.jpg",
  "/images/concept/concept6.jpg",
];

export function Concept() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-4 md:py-10 relative bg-white">
      <div className="section-divider mb-6 md:mb-12"></div>

      <Container className="overflow-visible">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="space-y-6 md:space-y-8">
            <div>
              {/* タイトル - 1行目: フェードイン */}
              <h2
                className={`
                  text-4xl md:text-5xl lg:text-6xl font-display font-bold 
                  text-mono-950 leading-tight
                  transition-all duration-1000 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
              >
                discover friends
              </h2>
              {/* タイトル - 2行目: 遅れて力強く */}
              <h2
                className={`
                  text-4xl md:text-5xl lg:text-6xl font-display font-bold 
                  text-mono-950 leading-tight mb-6
                  transition-all duration-1000 ease-out delay-300
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
              >
                celebrate girlhood
              </h2>
              <div className="w-16 h-1 bg-mono-800 mb-6 md:mb-8"></div>
            </div>

            {/* サブタイトル */}
            <div
              className={`
                space-y-4 md:space-y-6 text-lg md:text-xl text-mono-700 leading-relaxed
                transition-all duration-1000 ease-out delay-500
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              <p className="font-medium">
                好きやセンスでつながる、新しい関係。
                <br className="hidden md:block" />
                ここから始まる、私たちのリアル。
              </p>
            </div>
          </div>

          {/* 右側: 3D回転カードアニメーション */}
          <div className="relative flex justify-center lg:justify-end py-6 md:py-12 lg:py-16">
            {/* 十分な高さを確保した3Dコンテナ - モバイルは小さく、PCは大きく */}
            <div
              className="relative w-full max-w-[450px] lg:max-w-[700px]"
              style={{
                height: "600px",
                minHeight: "600px",
              }}
            >
              {/* 3D空間のコンテナ */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "100%",
                  height: "100%",
                  perspective: "1500px",
                  perspectiveOrigin: "center center",
                }}
              >
                {/* 回転する3D円形 */}
                <div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {cardImages.map((image, index) => {
                    // 6枚のカードを円形に配置（360度 / 6 = 60度ずつ）
                    const angle = (index * 360) / 6;

                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2 mobile-card lg:desktop-card"
                        style={{
                          transformStyle: "preserve-3d",
                          animation: "rotate3D 20s linear infinite",
                          animationDelay: `${-index * (20 / 6)}s`,
                        }}
                      >
                        {/* カード本体 - 両面 - モバイルは小さく、PCは大きく */}
                        <div
                          className="card-container"
                          style={{
                            transformStyle: "preserve-3d",
                            position: "relative",
                          }}
                        >
                          {/* 表面 - 画像 */}
                          <div
                            className="absolute inset-0 rounded-2xl overflow-hidden"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              boxShadow:
                                "0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                          >
                            <Image
                              src={image}
                              alt={`Vibery カード ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 180px, 240px"
                              priority={index < 3}
                            />
                            {/* ノッチ風装飾 */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-mono-950/20 rounded-full z-10"></div>
                          </div>

                          {/* 裏面 - 真っ黒 */}
                          <div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                              backgroundColor: "#000000",
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                              boxShadow:
                                "0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                          >
                            {/* ノッチ風装飾（裏面） */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-mono-900 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 中央の装飾的なドット */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-mono-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </Container>

      {/* 背景の装飾 */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-mono-200/30 rounded-full blur-3xl -z-10 opacity-40"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-mono-200/30 rounded-full blur-3xl -z-10 opacity-30"></div>

      <style jsx>{`
        /* モバイル: 220px の小さな半径で回転 */
        .mobile-card {
          transform: translate(-50%, -50%) rotateY(var(--angle))
            translateZ(220px);
        }

        @keyframes rotate3D {
          from {
            transform: translate(-50%, -50%) rotateY(0deg) translateZ(220px);
          }
          to {
            transform: translate(-50%, -50%) rotateY(360deg) translateZ(220px);
          }
        }

        /* PC (1024px以上): 350px の大きな半径で回転 */
        @media (min-width: 1024px) {
          .desktop-card {
            transform: translate(-50%, -50%) rotateY(var(--angle))
              translateZ(350px);
          }

          @keyframes rotate3D {
            from {
              transform: translate(-50%, -50%) rotateY(0deg) translateZ(350px);
            }
            to {
              transform: translate(-50%, -50%) rotateY(360deg) translateZ(350px);
            }
          }
        }

        /* モバイル: 180x360px */
        .card-container {
          width: 180px;
          height: 360px;
        }

        /* PC (1024px以上): 240x480px に拡大 */
        @media (min-width: 1024px) {
          .card-container {
            width: 240px;
            height: 480px;
          }
        }
      `}</style>
    </section>
  );
}
