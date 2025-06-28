import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { LINKS } from "@/config/links";

export function Footer() {
  return (
    <footer className="border-t border-mono-800/50 py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/applogo.jpg"
                  alt={`${LINKS.site.name} ロゴ`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="text-2xl font-display font-bold text-mono-50">
                {LINKS.site.name}
              </span>
            </div>

            <p className="text-mono-400 mb-6 text-lg leading-relaxed max-w-md">
              同性の友達づくりをサポートする
              <br />
              新しいコミュニケーションアプリ
            </p>

            <p className="text-mono-600 font-mono text-sm uppercase tracking-wider">
              © 2025 Vibery 運営事務局
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-mono-100 mb-4 text-lg">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={LINKS.internal.privacy}
                  className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href={LINKS.internal.terms}
                  className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-mono-100 mb-4 text-lg">
              Social
            </h3>
            <div className="flex flex-wrap gap-6">
              <a
                href={LINKS.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
              >
                Threads
              </a>
              <a
                href={LINKS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
              >
                Instagram
              </a>
              <a
                href={LINKS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-mono-800/50 mt-12 pt-6 text-center">
          <p className="text-mono-600 font-mono text-sm uppercase tracking-wider">
            Last Updated: June 25, 2025
          </p>
        </div>
      </Container>
    </footer>
  );
}
