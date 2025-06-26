import { Container } from "@/components/ui/Container"

export function Philosophy() {
  return (
    <section className="py-20 bg-black text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            友達とは？今、なぜ共鳴が必要か
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent-500">
                真の友情について
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                現代社会では、多くの人が表面的な関係に疲れを感じています。
                SNSの「いいね」の数や、見せかけのつながりではなく、
                本当に理解し合える友達を求めています。
              </p>
              <p className="text-gray-300 leading-relaxed">
                Viberyは、そんな純粋で深い友情を育む場所。
                お互いの価値観や感性を尊重し合える、
                かけがえのない友達との出会いを提供します。
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent-500">
                共鳴する心
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                趣味や興味が同じでも、感じ方は人それぞれ。
                でも、時として心が共鳴する瞬間があります。
                同じ音楽を聴いて鳥肌が立ったり、同じ本を読んで涙したり。
              </p>
              <p className="text-gray-300 leading-relaxed">
                そんな心の共鳴を大切にし、
                深い理解と信頼に基づいた友情を築いていく。
                それがViberyの目指す世界です。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
