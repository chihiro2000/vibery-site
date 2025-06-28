import { Container } from "@/components/ui/Container"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-mono-800/50 py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-mono-50 rounded-full"></div>
              <span className="text-2xl font-display font-bold text-mono-50">Vibery</span>
            </div>
            
            <p className="text-mono-400 mb-8 text-lg leading-relaxed max-w-md">
              同性の友達づくりをサポートする<br />
              新しいコミュニケーションアプリ
            </p>
            
            <p className="text-mono-600 font-mono text-sm uppercase tracking-wider">
              © 2025 Vibery 運営事務局
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display font-semibold text-mono-100 mb-6 text-lg">
                Legal
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
                  >
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display font-semibold text-mono-100 mb-6 text-lg">
                Social
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#" 
                    className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-mono-400 hover:text-mono-100 transition-colors font-medium"
                  >
                    Threads
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-mono-800/50 mt-16 pt-8 text-center">
          <p className="text-mono-600 font-mono text-sm uppercase tracking-wider">
            Last Updated: June 25, 2025
          </p>
        </div>
      </Container>
    </footer>
  )
}
