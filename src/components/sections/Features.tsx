import { Container } from "@/components/ui/Container"

const features = [
  {
    title: "同性限定",
    description: "安心・安全な環境で、純粋な友情を育むことができます。恋愛目的の利用は一切禁止しています。",
    icon: "👥"
  },
  {
    title: "趣味タグマッチング", 
    description: "共通の趣味や興味でつながれる独自のタグシステム。価値観の合う友達を見つけやすくなります。",
    icon: "🏷️"
  },
  {
    title: "恋愛ナシの純粋な友情",
    description: "恋愛や出会い系とは一線を画した、友達づくりに特化したコミュニケーション環境を提供します。",
    icon: "🤝"
  }
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Viberyの特徴
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            従来のSNSや出会い系アプリとは違う、友達づくりに特化した環境を提供
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
