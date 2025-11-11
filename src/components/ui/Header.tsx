"use client";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LINKS } from "@/config/links";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-20 md:h-32 py-4 md:py-6">
          {/* Logo - 拡大 */}
          <Link href="/" className="flex items-center group z-50">
            <div className="relative w-28 h-28 md:w-44 md:h-44 transition-transform group-hover:scale-110 duration-300 overflow-hidden drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/appLogo.png"
                alt={`${LINKS.site.name} ロゴ`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Liquid Glass グループ */}
          <nav className="hidden md:block">
            <div
              className={cn(
                "flex items-center gap-1 px-2 py-2 rounded-[20px] transition-all duration-500",
                // Liquid Glass エフェクト
                "backdrop-blur-[20px] backdrop-saturate-[180%]",
                "bg-white/[0.15]",
                "border border-white/[0.25]",
                "shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(255,255,255,0.1)]",
                isScrolled && "shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
              )}
            >
              <NavLink href={LINKS.internal.home}>Home</NavLink>
              <NavLink href={LINKS.internal.privacy}>Privacy</NavLink>
              <NavLink href={LINKS.internal.terms}>Terms</NavLink>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5 group z-50 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg active:scale-95 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={cn(
                "bg-mono-950 block transition-all duration-300 ease-out h-0.5 w-5 rounded-full",
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            ></span>
            <span
              className={cn(
                "bg-mono-950 block transition-all duration-300 ease-out h-0.5 w-5 rounded-full",
                isMenuOpen ? "opacity-0" : ""
              )}
            ></span>
            <span
              className={cn(
                "bg-mono-950 block transition-all duration-300 ease-out h-0.5 w-5 rounded-full",
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            ></span>
          </button>
        </div>

        {/* Mobile Menu - Liquid Glass */}
        {isMenuOpen && (
          <nav className="md:hidden mb-4 rounded-2xl backdrop-blur-[20px] backdrop-saturate-[180%] bg-white/[0.15] border border-white/[0.25] shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] overflow-hidden animate-slide-up">
            <div className="flex flex-col py-2">
              <MobileNavLink
                href={LINKS.internal.home}
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </MobileNavLink>
              <MobileNavLink
                href={LINKS.internal.privacy}
                onClick={() => setIsMenuOpen(false)}
              >
                プライバシーポリシー
              </MobileNavLink>
              <MobileNavLink
                href={LINKS.internal.terms}
                onClick={() => setIsMenuOpen(false)}
              >
                利用規約
              </MobileNavLink>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-6 py-3 rounded-[16px] text-lg font-semibold tracking-tight",
        "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300",
        "hover:bg-white/[0.2] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]",
        "active:scale-[0.97]"
      )}
    >
      {children}
    </Link>
  );
}

// Mobile Navigation Link
function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "px-6 py-4 text-mono-700 font-medium transition-all duration-200",
        "hover:bg-white/[0.2] hover:text-mono-950",
        "active:bg-white/[0.3]",
        "border-b border-white/[0.1] last:border-b-0"
      )}
    >
      {children}
    </Link>
  );
}
