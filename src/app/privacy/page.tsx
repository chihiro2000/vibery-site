import { Container } from "@/components/ui/Container";
import { Metadata } from "next";
import { LINKS } from "@/config/links";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Vibery - 同性の友達づくりアプリ",
  description:
    "Viberyのプライバシーポリシー。利用者情報の取り扱いについて詳しく説明しています。",
};

export default function PrivacyPage() {
  return (
    <main className="py-32 min-h-screen">
      <Container size="md">
        <div className="glass rounded-2xl p-12 lg:p-16">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-mono-50">
              プライバシーポリシー
            </h1>
            <div className="w-16 h-px bg-mono-600 mx-auto mb-8"></div>
            <p className="text-mono-500 font-mono uppercase tracking-wider text-sm">
              最終更新日: 2025年6月25日
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-mono-300 leading-relaxed text-lg">
                このアプリケーション・プライバシーポリシーは、Vibery運営事務局（以下、当方といいます）が提供するスマートフォン用アプリケーション「
                {LINKS.site.name}
                」（以下、本アプリといいます）および本アプリに関するサービス（以下、本サービスといいます）における利用者情報の取扱いを定めたものです。
              </p>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                1. 取得する利用者情報の項目、取得方法、利用目的、第三者提供等
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-12"></div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-100">
                  本アプリが利用者の入力により取得する利用者情報
                </h3>
                <div className="glass p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-300 text-lg">
                    <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    メールアドレス、ニックネーム、性別、生年月日、プロフィール写真、興味・関心、居住地域、職業情報など
                  </p>
                  <p className="text-mono-300 text-lg">
                    <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    ユーザー認証、マッチング機能の提供、各種機能の運用、アカウントサポート（問題解決や復旧対応）、不正利用防止
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-100">
                  本アプリが認証時に取得する利用者情報
                </h3>
                <div className="glass p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-300 text-lg">
                    <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    Appleアカウント認証情報（トークン、メールアドレス、表示名など）
                  </p>
                  <p className="mb-4 text-mono-300 text-lg">
                    <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    アカウント作成・認証
                  </p>
                  <p className="text-mono-300 text-lg">
                    <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                      第三者提供:{" "}
                    </strong>
                    有り（認証サービス提供事業者）
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-100">
                  位置情報について
                </h3>
                <div className="glass p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-300 text-lg">
                    <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    端末のGPS情報（利用者の許可がある場合のみ）
                  </p>
                  <p className="mb-4 text-mono-300 text-lg">
                    <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    近隣ユーザーとのマッチング、距離表示
                  </p>
                  <p className="text-mono-300 text-lg">
                    <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                      備考:{" "}
                    </strong>
                    位置情報はリアルタイムでの共有は行わず、マッチング目的のみに使用します
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                2. データの保持期間
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <ul className="list-disc list-inside space-y-4 text-mono-300 text-lg leading-relaxed">
                <li>
                  チャットメッセージおよび添付画像：送信から2週間後に自動削除
                </li>
                <li>
                  スワイプ履歴：3週間後に自動削除（マッチしていないユーザーのみ）
                </li>
                <li>アクセスログ：1日後に自動削除</li>
                <li>アカウント情報：退会手続きがあるまで保持</li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                3. 運営者によるデータアクセスについて
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <p className="mb-6 text-mono-300 text-lg">
                当方は、以下の限定的な場合において、ユーザーの個人情報（メールアドレス、電話番号など）にアクセスすることがあります：
              </p>
              <ul className="list-disc list-inside space-y-3 text-mono-300 text-lg leading-relaxed mb-6">
                <li>
                  アカウント復旧やパスワードリセット等のユーザーサポート対応
                </li>
                <li>不正利用や違反行為の調査</li>
                <li>通報対応や安全性確保のための調査</li>
                <li>法的要請への対応</li>
              </ul>
              <p className="text-mono-300 text-lg leading-relaxed">
                当方は、上記の目的以外でユーザーの個人情報を積極的に確認することはありません。また、アクセス権限は必要最小限の担当者のみに付与し、適切なセキュリティ対策のもとで管理します。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                4. 未成年者の利用について
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <p className="text-mono-300 text-lg leading-relaxed">
                本アプリは18歳以上の方を対象としたサービスです。18歳未満の方はご利用いただけません。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-50">
                5. お問い合わせ窓口
              </h2>
              <div className="w-12 h-px bg-mono-700 mb-8"></div>
              <div className="glass p-8 rounded-xl">
                <p className="mb-4 text-lg">
                  <strong className="text-mono-100 font-mono uppercase tracking-wider text-sm">
                    運営者名:{" "}
                  </strong>
                  <span className="text-mono-300">
                    {LINKS.site.name}運営事務局
                  </span>
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
