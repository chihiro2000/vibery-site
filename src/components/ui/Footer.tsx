import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { LINKS } from "@/config/links";

export function Footer() {
  return (
    <footer className="border-t border-mono-300/50 py-12 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <div className="relative w-20 h-20 overflow-hidden">
                <Image
                  src="/images/appLogo.png"
                  alt={`${LINKS.site.name} ロゴ`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-mono-600 mb-6 text-lg leading-relaxed max-w-md">
              同性の友達づくりをサポートする
              <br />
              新しいコミュニケーションアプリ
            </p>

            <p className="text-mono-500 font-mono text-sm uppercase tracking-wider">
              © 2025 Vibery 運営事務局
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-mono-950 mb-4 text-lg">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={LINKS.internal.privacy}
                  className="text-mono-600 hover:text-mono-950 transition-colors font-medium"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href={LINKS.internal.terms}
                  className="text-mono-600 hover:text-mono-950 transition-colors font-medium"
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-mono-950 mb-4 text-lg">
              Social
            </h3>
            <div className="flex flex-wrap gap-6">
              <a
                href={LINKS.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono-600 hover:text-mono-950 transition-colors font-medium"
              >
                Threads
              </a>
              <a
                href={LINKS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono-600 hover:text-mono-950 transition-colors font-medium"
              >
                Instagram
              </a>
              <a
                href={LINKS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono-600 hover:text-mono-950 transition-colors font-medium"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-mono-300/50 mt-12 pt-6 text-center">
          <p className="text-mono-500 font-mono text-sm uppercase tracking-wider">
            Last Updated: June 25, 2025
          </p>
        </div>
      </Container>
    </footer>
  );
}
