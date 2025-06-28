import { Container } from "@/components/ui/Container";

const features = [
  {
    title: "同性限定だから、安心できる。",
    description:
      "恋愛目的を一切排除し、\n同性だけに限定された空間だからこそ、\n誰にも気をつかわず、本音でつながれる。",
    icon: "01",
    highlight: "SAFETY & RELATABILITY",
  },
  {
    title: "投稿は、フレンドにだけ。",
    description:
      "あなたの投稿は、共鳴した相手にしか届きません。\nだからこそ、日々のこと、価値観、弱さも、\n自由に言葉にしていける空間です。",
    icon: "02",
    highlight: "PRIVATE SHARING",
  },
  {
    title: "趣味タグで、自然につながる。",
    description:
      "共通の「好き」から始まるつながり。\nタグで表現されたあなたの感性に\n共鳴する相手と、自然に出会えます。",
    icon: "03",
    highlight: "TAG-BASED MATCHING",
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

              <h3 className="text-2xl font-display font-bold mb-6 text-mono-100 group-hover:text-mono-50 transition-colors whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-mono-400 leading-relaxed group-hover:text-mono-300 transition-colors whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
