"use client";

export function ScrollIndicator() {
  const handleScrollDown = () => {
    const nextSection = document.querySelector("main section:nth-child(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-0 md:bottom-1 left-1/2 transform -translate-x-1/2">
      <button
        onClick={handleScrollDown}
        className="flex flex-col items-center space-y-2 text-mono-400 hover:text-mono-200 transition-colors duration-300 group"
        aria-label="下にスクロール"
      >
        <span className="text-xs md:text-sm font-mono uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
        <div className="flex flex-col items-center animate-bounce">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-y-1 transition-transform duration-300"
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
