"use client";

export function ScrollIndicator() {
  const handleScrollDown = () => {
    const nextSection = document.querySelector("main section:nth-child(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2">
      <button
        onClick={handleScrollDown}
        className="flex flex-col items-center space-y-2 text-mono-400 hover:text-mono-200 transition-colors duration-300 group"
        aria-label="下にスクロール"
      >
        <span className="text-xs md:text-sm font-mono uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-mono-400 rounded-full flex justify-center group-hover:border-mono-200 transition-colors">
            <div className="w-1 h-2 md:h-3 bg-mono-400 rounded-full mt-1 md:mt-2 group-hover:bg-mono-200 transition-colors animate-pulse"></div>
          </div>
          <svg
            className="w-3 h-3 md:w-4 md:h-4 mt-1 md:mt-2 transform group-hover:translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
