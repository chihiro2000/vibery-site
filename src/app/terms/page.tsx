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
    <main className="py-32 min-h-screen bg-white">
      <Container size="md">
        <div className="bg-mono-100/30 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-mono-200">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-mono-950">
              利用規約
            </h1>
            <div className="w-16 h-px bg-mono-400 mx-auto mb-8"></div>
            <p className="text-mono-500 font-mono uppercase tracking-wider text-sm">
              最終更新日: 2025年6月25日
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-mono-700 leading-relaxed text-lg">
                本利用規約（以下「本規約」）は、{LINKS.site.name}
                運営事務局（以下「運営者」）が提供するアプリ「{LINKS.site.name}
                」（以下「本サービス」）の利用条件を定めるものです。本サービスを利用するすべての利用者（以下「ユーザー」）は、本規約に同意する必要があります。
              </p>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第1条（本規約への同意）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
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
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第2条（サービス内容）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  本サービスは、同性の友達作りを目的としたコミュニケーション・マッチングアプリです。
                  <strong className="text-mono-900 bg-mono-200 px-2 py-1 rounded">
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
                  <strong className="text-mono-900 bg-mono-200 px-2 py-1 rounded">
                    18歳以上（高校生を除く）
                  </strong>
                  の方のみ利用可能です。18歳未満の利用が判明した場合、運営者は直ちにアカウントを削除します。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第3条（アカウント登録と管理）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  ユーザーは、電話番号、Appleアカウント、または運営者が定めるその他の方法でアカウントを作成します。
                </li>
                <li>
                  ユーザーは、登録情報（メールアドレス・電話番号など）を正確かつ最新に保ち、虚偽の情報を登録しないものとします。
                </li>
                <li>
                  ユーザーは、アカウントのセキュリティを管理する責任を負います。パスワードやログイン情報の管理不備によるトラブルについて、運営者は責任を負いません。
                </li>
                <li>
                  アカウントの不正利用が発覚した場合、運営者はアカウントの停止・削除を行います。
                </li>
                <li>
                  18歳未満のユーザーと判明した場合、運営者は直ちにアカウントを削除します。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第4条（禁止事項）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <p className="mb-6 text-mono-700 text-lg">
                以下の行為を禁止します。違反が確認された場合、運営者は予告なくアカウント停止、利用制限、または利用契約の解除等の措置を講じることがあります。
              </p>
              <ul className="list-disc list-inside space-y-3 text-mono-700 text-lg leading-relaxed">
                <li>他のユーザーまたは第三者への誹謗中傷・差別・脅迫</li>
                <li>
                  わいせつ・公序良俗に反する表現、宗教・政治・性的目的の勧誘
                </li>
                <li>
                  <strong className="text-mono-900 bg-mono-200 px-2 py-1 rounded">
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
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第5条（プライバシー・個人情報）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  運営者は、取得したユーザーの個人情報を、別途定める
                  <strong className="text-mono-900">
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
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第6条（位置情報の利用）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  本サービスは、アプリ起動時に限り、マッチング機能のため端末の位置情報を取得することがあります。
                </li>
                <li>
                  位置情報の取得はリアルタイムで行われますが、ユーザーが許可を無効にした場合、関連機能の利用が制限されることがあります。
                </li>
                <li>
                  位置情報は、マッチング機能以外の目的では使用しません。詳細はプライバシーポリシーをご確認ください。
                </li>
                <li>
                  取得した位置情報は最大3か月間保存され、その後自動的に削除されます。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第7条（メッセージ機能）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>ユーザー間でメッセージや画像の送受信が可能です。</li>
                <li>
                  不適切な内容が確認された場合、該当メッセージの削除やアカウント停止等の措置を行うことがあります。
                </li>
                <li>
                  メッセージやメディアデータは、一定期間（最大3か月）経過後に自動削除されることがあります。保存期間は運営状況により変更される場合があります。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第8条（サードパーティサービスの利用）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  本サービスは、Firebaseなどの外部クラウドサービスでデータ保存や認証を行います。
                </li>
                <li>
                  広告配信にはAdMobなどを使用し、広告識別子を取得・利用する場合があります。詳細はプライバシーポリシーをご確認ください。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第9条（利用停止・退会）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  本規約違反時、運営者は予告なく利用停止等の措置を講じることがあります。
                </li>
                <li>
                  ユーザーは任意に退会できます。手続きはアプリ内または指定の方法で行います。
                </li>
                <li>
                  退会時、登録情報や投稿データは削除されますが、統計データや匿名化データは保持される場合があります。
                </li>
                <li>
                  退会またはアカウント削除後も、データ復旧のため最低2週間はデータを保持します。この期間経過後、完全に削除されます。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第10条（安全対策と通報）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
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
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第11条（アカウント停止・削除に関する異議申し立て）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  アカウント停止または削除に関して異議のあるユーザーは、通知を受けた日から14日以内に、vibery.official@gmail.com宛に異議申し立てを行うことができます。
                </li>
                <li>
                  異議申し立てには、以下の情報を含める必要があります：
                  <br />
                  (a) ユーザー名またはアカウント識別情報
                  <br />
                  (b) 停止・削除の理由として通知された内容
                  <br />
                  (c) 異議申し立ての理由と根拠
                </li>
                <li>
                  運営者は、受領した異議申し立てを検討し、原則として14日以内に回答します。
                </li>
                <li>
                  異議申し立てが認められた場合、速やかにアカウントの復旧手続きを行います。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第12条（ユーザーフィードバックの扱い）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  本サービスではアプリ内でフィードバックや改善提案を送信する機能を提供しています。
                </li>
                <li>
                  ユーザーが運営者に提供したフィードバック、改善提案、アイデアなどは、運営者が自由に利用できるものとし、ユーザーへの通知や対価の支払いなしに本サービスに実装される場合があります。
                </li>
                <li>
                  提供されたフィードバックに関する知的財産権は運営者に帰属するものとします。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第13条（サービスの変更・中断）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>
                  運営者は事前告知のうえ、サービス内容の変更・追加または提供中断を行うことがあります。
                </li>
                <li>
                  システム保守、障害対応、不可抗力により、サービスを一時停止することがあります。
                </li>
                <li>
                  これらによるユーザーの損害について、運営者は責任を負いません。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第14条（免責事項）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
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
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第15条（規約の変更）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>運営者は必要に応じて本規約を変更できます。</li>
                <li>
                  規約変更時は、サービス上で告知し、効力発生日を定めます。
                </li>
                <li>
                  変更後の規約は、効力発生日以降のサービス利用をもって同意されたものとみなします。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第16条（準拠法・管轄裁判所）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ol className="list-decimal list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
                <li>本規約には日本法が適用されます。</li>
                <li>
                  紛争が生じた場合、運営者所在地の地方裁判所または簡易裁判所を専属的合意管轄裁判所とします。
                </li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                第17条（お問い合わせ）
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl">
                <p className="mb-6 text-mono-700 text-lg">
                  本規約に関するお問い合わせは、以下のメールアドレスまでご連絡ください。
                </p>
                <p className="text-lg mb-4">
                  <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                    Email:{" "}
                  </strong>
                  <a
                    href="mailto:vibery.official@gmail.com"
                    className="text-mono-700 hover:text-mono-950 transition-colors underline underline-offset-4"
                  >
                    vibery.official@gmail.com
                  </a>
                </p>
                <p className="text-mono-700 text-lg">
                  運営者は、お問い合わせに対し合理的な範囲で速やかに対応いたします。
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                付則
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <p className="text-mono-700 text-lg leading-relaxed mb-4">
                本規約は2025年3月8日に制定・施行されました。
              </p>
              <p className="text-mono-700 text-lg leading-relaxed">
                ユーザーは本規約の内容を理解し、本利用契約の成立後は本規約に従うものとします。
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
