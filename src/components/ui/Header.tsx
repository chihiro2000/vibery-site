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
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-mono-300/50 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group z-50">
            <div className="relative w-24 h-24 transition-transform group-hover:scale-110 duration-300 overflow-hidden">
              <Image
                src="/images/appLogo.png"
                alt={`${LINKS.site.name} ロゴ`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={LINKS.internal.home}
              className="text-mono-600 hover:text-mono-950 transition-colors duration-300 font-medium text-sm"
            >
              Home
            </Link>
            <Link
              href={LINKS.internal.privacy}
              className="text-mono-600 hover:text-mono-950 transition-colors duration-300 font-medium text-sm"
            >
              Privacy
            </Link>
            <Link
              href={LINKS.internal.terms}
              className="text-mono-600 hover:text-mono-950 transition-colors duration-300 font-medium text-sm"
            >
              Terms
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1 group z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={cn(
                "bg-mono-950 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm",
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              )}
            ></span>
            <span
              className={cn(
                "bg-mono-950 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm",
                isMenuOpen ? "opacity-0" : ""
              )}
            ></span>
            <span
              className={cn(
                "bg-mono-950 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm",
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              )}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-mono-300/50 py-4 bg-white/98 backdrop-blur-xl">
            <div className="flex flex-col space-y-4">
              <Link
                href={LINKS.internal.home}
                className="text-mono-600 hover:text-mono-950 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href={LINKS.internal.privacy}
                className="text-mono-600 hover:text-mono-950 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                プライバシーポリシー
              </Link>
              <Link
                href={LINKS.internal.terms}
                className="text-mono-600 hover:text-mono-950 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                利用規約
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
