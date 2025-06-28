import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function DownloadCTA() {
  return (
    <section className="py-16 relative">
      <div className="section-divider mb-16"></div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-mono-50">
            新しい友達との
            <br className="hidden md:block" />
            出会いを始めよう
          </h2>

          <p className="text-xl text-mono-400 mb-12 leading-relaxed font-light">
            感性で繋がる友達づくり。今すぐViberyをダウンロードして、
            <br className="hidden md:block" />
            あなたにぴったりの友達を見つけませんか？
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <Button size="xl" variant="primary" className="font-semibold">
              App Storeでダウンロード
            </Button>

            <div className="flex items-center space-x-4 text-mono-500 font-mono text-sm">
              <span>⭐️ 4.8</span>
              <span>•</span>
              <span>10万+ ダウンロード</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
