import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* 背景エフェクト */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* グリッド背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              感性で繋がる、<br />
              <span className="gradient-text animate-gradient bg-size-200">新しい友達づくり</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              恋愛ではなく、純粋な友情を。<br />
              同性限定で安心して趣味や価値観を共有できる<br />
              <span className="text-accent-400 font-semibold">次世代コミュニケーションアプリ</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="gradient" size="xl" className="min-w-[280px]">
              <span className="mr-2">📱</span>
              App Storeでダウンロード
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px]">
              詳しく見る
            </Button>
          </div>

          {/* アプリスクリーンショット */}
          <div className="relative max-w-sm mx-auto">
            <div className="relative z-10 glass rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float">
              <div className="w-full h-96 bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <span className="text-gray-400 text-lg">アプリスクリーンショット</span>
                </div>
              </div>
            </div>
            
            {/* 装飾的な要素 */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>

          {/* 統計情報 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">10万+</div>
              <div className="text-gray-400">ダウンロード</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4.8★</div>
              <div className="text-gray-400">App Store評価</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-gray-400">満足度</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
