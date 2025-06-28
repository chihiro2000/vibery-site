import { Container } from "@/components/ui/Container";

export function Philosophy() {
  return (
    <section className="py-16 relative">
      <div className="section-divider mb-16"></div>

      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-mono-50">
              Philosophy
            </h2>
            <p className="text-2xl text-mono-400 font-light">
              友達とは？今、なぜ共鳴が必要か
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-display font-bold mb-6 text-mono-100">
                  真の友情について
                </h3>
                <div className="w-16 h-px bg-mono-600 mb-6"></div>
              </div>

              <p className="text-mono-300 leading-relaxed text-lg">
                現代社会では、多くの人が表面的な関係に疲れを感じています。
                SNSの「いいね」の数や、見せかけのつながりではなく、
                本当に理解し合える友達を求めています。
              </p>

              <p className="text-mono-300 leading-relaxed text-lg">
                Viberyは、そんな純粋で深い友情を育む場所。
                お互いの価値観や感性を尊重し合える、
                かけがえのない友達との出会いを提供します。
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-display font-bold mb-6 text-mono-100">
                  共鳴する心
                </h3>
                <div className="w-16 h-px bg-mono-600 mb-6"></div>
              </div>

              <p className="text-mono-300 leading-relaxed text-lg">
                趣味や興味が同じでも、感じ方は人それぞれ。
                でも、時として心が共鳴する瞬間があります。
                同じ音楽を聴いて鳥肌が立ったり、同じ本を読んで涙したり。
              </p>

              <p className="text-mono-300 leading-relaxed text-lg">
                そんな心の共鳴を大切にし、
                深い理解と信頼に基づいた友情を築いていく。
                それがViberyの目指す世界です。
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-3xl md:text-4xl font-display font-light text-mono-200 italic leading-relaxed">
              &ldquo;真の友情は、理解と共感から生まれる&rdquo;
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
