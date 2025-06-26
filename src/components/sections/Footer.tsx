import { Container } from "@/components/ui/Container"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <span className="text-xl font-bold">Vibery</span>
            </div>
            <p className="text-gray-400 mb-4">
              同性の友達づくりをサポートする<br />
              新しいコミュニケーションアプリ
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Vibery 運営事務局
            </p>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">リンク</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                      プライバシーポリシー
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                      利用規約
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">SNS</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Threads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            本サイトは定期的に更新されます。最終更新日: 2025年6月25日
          </p>
        </div>
      </Container>
    </footer>
  )
}
