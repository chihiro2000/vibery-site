import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export function DownloadCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent-500 to-purple-600 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            新しい友達との出会いを始めよう
          </h2>
          <p className="text-xl mb-8 opacity-90">
            感性で繋がる友達づくり。今すぐViberyをダウンロードして、
            あなたにぴったりの友達を見つけませんか？
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100"
            >
              App Storeでダウンロード
            </Button>
            
            <div className="flex items-center space-x-2 text-sm opacity-75">
              <span>⭐️ 4.8</span>
              <span>•</span>
              <span>10万+ ダウンロード</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
