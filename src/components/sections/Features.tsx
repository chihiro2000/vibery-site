import { Container } from "@/components/ui/Container";

const features = [
  {
    title: "同性限定",
    description:
      "安心・安全な環境で、純粋な友情を育むことができます。恋愛目的の利用は一切禁止しています。",
    icon: "01",
    highlight: "Safe Environment",
  },
  {
    title: "趣味タグマッチング",
    description:
      "共通の趣味や興味でつながれる独自のタグシステム。価値観の合う友達を見つけやすくなります。",
    icon: "02",
    highlight: "Smart Matching",
  },
  {
    title: "恋愛ナシの純粋な友情",
    description:
      "恋愛や出会い系とは一線を画した、友達づくりに特化したコミュニケーション環境を提供します。",
    icon: "03",
    highlight: "Pure Friendship",
  },
];

export function Features() {
  return (
    <section className="py-16 relative">
      <div className="section-divider mb-16"></div>

      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-mono-50">
            Features
          </h2>
          <p className="text-xl text-mono-400 max-w-3xl mx-auto font-light leading-relaxed">
            従来のSNSや出会い系アプリとは違う、
            <br className="hidden md:block" />
            友達づくりに特化した環境を提供
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 glass rounded-2xl hover:bg-mono-50/5 transition-all duration-500 hover:scale-105 glow-subtle"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-6xl font-display font-bold text-mono-700 group-hover:text-mono-600 transition-colors">
                    {feature.icon}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-mono-600 group-hover:text-mono-500 transition-colors">
                    {feature.highlight}
                  </span>
                </div>
                <div className="w-12 h-px bg-mono-700 group-hover:bg-mono-500 transition-colors mb-6"></div>
              </div>

              <h3 className="text-2xl font-display font-bold mb-6 text-mono-100 group-hover:text-mono-50 transition-colors">
                {feature.title}
              </h3>
              <p className="text-mono-400 leading-relaxed group-hover:text-mono-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
