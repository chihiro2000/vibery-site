"use client";

export function ScrollIndicator() {
  const handleScrollDown = () => {
    const nextSection = document.querySelector("main section:nth-child(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30">
      <button
        onClick={handleScrollDown}
        className="group relative flex flex-col items-center gap-3 px-6 py-4 rounded-[20px] backdrop-blur-[24px] backdrop-saturate-[180%] bg-white/[0.12] border border-white/[0.3] shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(255,255,255,0.15)] hover:bg-white/[0.18] hover:border-white/[0.4] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18),inset_0_2px_0_rgba(255,255,255,0.8)] transition-all duration-500 ease-out active:scale-[0.96] cursor-pointer"
        aria-label="下にスクロール"
      >
        {/* トップハイライト（ガラスの光沢） */}
        <div className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-white/50 to-transparent rounded-t-[20px] pointer-events-none" />

        {/* テキスト */}
        <span className="relative z-10 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-white/80 group-hover:text-white/95 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          Scroll
        </span>

        {/* アイコン - 上品なアニメーション */}
        <div className="relative z-10 flex flex-col items-center">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white/75 group-hover:text-white/90 transition-all duration-500 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] animate-gentle-float"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>

        {/* リキッド動きエフェクト（ホバー時） */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[20px] overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-[100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[50%] transition-transform duration-1000 ease-out" />
        </div>

        {/* ボトムシャドウ（内側） */}
        <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/8 to-transparent rounded-b-[20px] pointer-events-none" />
      </button>

      <style jsx>{`
        @keyframes gentle-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-gentle-float {
          animation: gentle-float 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
