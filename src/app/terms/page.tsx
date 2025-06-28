import { Container } from "@/components/ui/Container";
import { Metadata } from "next";
import { LINKS } from "@/config/links";

export const metadata: Metadata = {
  title: "利用規約 | Vibery - 同性の友達づくりアプリ",
  description:
    "Viberyの利用規約。サービスの利用条件について詳しく説明しています。",
};

export default function TermsPage() {
  return (
    <main className="py-32 min-h-screen">
      <Container size="md">
        <div className="glass rounded-2xl p-12 lg:p-16">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-mono-50">
              利用規約
            </h1>
            <div className="w-16 h-px bg-mono-600 mx-auto mb-8"></div>
            <p className="text-mono-500 font-mono uppercase tracking-wider text-sm">
              最終更新日: 2025年6月25日
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-mono-300 leading-relaxed text-lg">
                本利用規約（以下「本規約」）は、{LINKS.site.name}
                運営事務局（以下「運営者」）が提供するアプリ「{LINKS.site.name}
                」（以下「本サービス」）の利用条件を定めるものです。本サービスを利用するすべての利用者（以下「ユーザー」）は、本規約に同意する必要があります。
              </p>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                第1条（本規約への同意）
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-300 text-lg leading-relaxed">
                <li>
                  ユーザーは、本規約の定めに従って本サービスを利用するものとします。
                </li>
                <li>
                  ユーザーが本サービスをスマートフォンその他の情報端末にダウンロードし、本規約への同意手続きを行った時点で、ユーザーと運営者との間で本規約に基づく利用契約（以下「本利用契約」）が成立します。
                </li>
                <li>
                  運営者は本サービスに関し、本規約のほか、ルールやガイドライン等を定める場合があります。これらも本規約の一部を構成します。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                第2条（サービス内容）
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-300 text-lg leading-relaxed">
                <li>
                  本サービスは、同性の友達作りを目的としたコミュニケーション・マッチングアプリです。
                  <strong className="text-mono-100 bg-mono-800 px-2 py-1 rounded">
                    恋愛・性的目的による利用は禁止します。
                  </strong>
                </li>
                <li>
                  本サービスは無料で提供され、広告収益により運営されます。
                </li>
                <li>
                  本サービスでは、ユーザー間のメッセージ機能や位置情報を用いた近隣ユーザー検索等の機能を提供します。
                </li>
                <li>
                  本サービスは
                  <strong className="text-mono-100 bg-mono-800 px-2 py-1 rounded">
                    18歳以上（高校生を除く）
                  </strong>
                  の方のみ利用可能です。18歳未満の利用が判明した場合、運営者は直ちにアカウントを削除します。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                第3条（禁止事項）
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <p className="mb-6 text-mono-300 text-lg">
                以下の行為を禁止します。違反が確認された場合、運営者は予告なくアカウント停止、利用制限、または利用契約の解除等の措置を講じることがあります。
              </p>
              <ul className="list-disc list-inside space-y-3 text-mono-300 text-lg leading-relaxed">
                <li>他のユーザーまたは第三者への誹謗中傷・差別・脅迫</li>
                <li>
                  わいせつ・公序良俗に反する表現、宗教・政治・性的目的の勧誘
                </li>
                <li>
                  <strong className="text-mono-100 bg-mono-800 px-2 py-1 rounded">
                    恋愛・性的な出会いを目的とする行為
                  </strong>
                </li>
                <li>虚偽のプロフィール登録（なりすまし含む）</li>
                <li>
                  営利目的・広告・宣伝・勧誘（アフィリエイト、マルチ商法など）
                </li>
                <li>
                  サービス運営の妨害、不正アクセス、システムへの悪影響を与える行為
                </li>
                <li>他者のアカウントの不正使用</li>
                <li>法令または本規約への違反</li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                第4条（安全対策と通報）
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-300 text-lg leading-relaxed">
                <li>
                  本サービスでは、不適切な行為やユーザーを発見した場合の通報システムを提供しています。
                </li>
                <li>
                  運営者は通報を受けた内容を調査し、必要に応じて適切な措置を講じます。
                </li>
                <li>
                  悪質な虚偽通報は、アカウント停止の対象となる場合があります。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                第5条（プライバシー・個人情報）
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-300 text-lg leading-relaxed">
                <li>
                  運営者は、取得したユーザーの個人情報を、別途定める
                  <strong className="text-mono-100">
                    「プライバシーポリシー」
                  </strong>
                  に従い適切に取り扱います。
                </li>
                <li>
                  ユーザーは、プライバシーポリシーに同意したうえで本サービスを利用するものとします。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                第6条（免責事項）
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-300 text-lg leading-relaxed">
                <li>
                  運営者は、本サービスの特定目的への適合性、有用性、正確性等を保証しません。
                </li>
                <li>
                  ユーザー間のトラブルは当事者間で解決するものとし、運営者は責任を負いません。ただし、必要に応じて独自の判断で対応することがあります。
                </li>
                <li>
                  サービスの提供・遅延・変更・中断・終了によるユーザーの損害について、運営者は責任を負いません。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                第7条（お問い合わせ）
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <div className="glass p-8 rounded-xl">
                <p className="mb-6 text-mono-300 text-lg">
                  本規約に関するお問い合わせは、以下のメールアドレスまでご連絡ください。
                </p>
                <p className="text-lg">
                  <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                    Email:{" "}
                  </strong>
                  <a
                    href={LINKS.contact.email}
                    className="text-mono-300 hover:text-mono-100 transition-colors underline underline-offset-4"
                  >
                    vibery.official.app@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
