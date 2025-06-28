"use client";
import { Container } from "@/components/ui/Container";
import { useState } from "react";

const faqs = [
  {
    question: "恋愛系アプリとの違いは何ですか？",
    answer:
      "Viberyは友達づくりに特化したアプリです。恋愛や性的な出会いを目的とした利用は禁止しており、同性限定のプラットフォームで安心して純粋な友情を育めます。",
  },
  {
    question: "安全性はどのように確保されていますか？",
    answer:
      "厳格な年齢認証（18歳以上）、同性限定システム、24時間体制の監視、通報機能、不適切なユーザーの即座な排除など、多層的な安全対策を実装しています。",
  },
  {
    question: "匿名性は保たれますか？",
    answer:
      "ニックネームでの利用が可能で、個人情報の開示は任意です。プライバシーを重視した設計で、安心してコミュニケーションを楽しめます。",
  },
  {
    question: "どのような人が利用していますか？",
    answer:
      "趣味や価値観を共有できる友達を求める18歳以上の方々が利用しています。学生から社会人まで幅広い年代の方が、純粋な友情を求めて参加しています。",
  },
  {
    question: "利用料金はかかりますか？",
    answer:
      "基本機能は完全無料でご利用いただけます。広告収益により運営されており、安心してお使いいただけます。",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 relative">
      <div className="section-divider mb-16"></div>

      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-mono-50">
            FAQ
          </h2>
          <p className="text-xl text-mono-400 font-light">
            よくある質問にお答えします
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                className="w-full glass rounded-xl p-8 text-left hover:bg-mono-50/5 transition-all duration-300 group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-display font-semibold text-xl text-mono-100 group-hover:text-mono-50 transition-colors pr-8 leading-relaxed">
                    {faq.question}
                  </h3>
                  <span className="text-3xl text-mono-400 group-hover:text-mono-300 transition-all duration-300 flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <div className="glass rounded-b-xl px-8 pb-8 mt-2 animate-slide-up">
                  <div className="w-full h-px bg-mono-800 mb-6"></div>
                  <p className="text-mono-300 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
