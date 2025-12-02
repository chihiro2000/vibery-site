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
    <main className="py-32 min-h-screen bg-white">
      <Container size="md">
        <div className="bg-mono-100/30 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-mono-200">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-mono-950">
              プライバシーポリシー
            </h1>
            <div className="w-16 h-px bg-mono-400 mx-auto mb-8"></div>
            <p className="text-mono-500 font-mono uppercase tracking-wider text-sm">
              最終更新日: 2025年3月8日
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-mono-700 leading-relaxed text-lg">
                このアプリケーション・プライバシーポリシーは、Vibery運営事務局（以下、当方といいます）が提供するスマートフォン用アプリケーション「
                {LINKS.site.name}
                」（以下、本アプリといいます）および本アプリに関するサービス（以下、本サービスといいます）における利用者情報の取扱いを定めたものです。
              </p>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                1. 取得する利用者情報の項目、取得方法、利用目的、第三者提供等
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-12"></div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-900">
                  本アプリが利用者の入力により取得する利用者情報
                </h3>
                <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    メールアドレス、ニックネーム、性別、生年月日、プロフィール写真、興味・関心、居住地域、職業情報など
                  </p>
                  <p className="text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    ユーザー認証、マッチング機能の提供、各種機能の運用、アカウントサポート（問題解決や復旧対応）、不正利用防止
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-900">
                  本アプリが認証時に取得する利用者情報
                </h3>
                <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    Appleアカウント認証情報（トークン、メールアドレス、表示名など）
                  </p>
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    アカウント作成・認証
                  </p>
                  <p className="text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      第三者提供:{" "}
                    </strong>
                    有り（認証サービス提供事業者）
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-900">
                  本アプリが通報対応時に取得する利用者情報
                </h3>
                <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    利用者間で交わされるメッセージの内容、通報情報
                  </p>
                  <p className="text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    通報時の対応、アプリ内の安全性の維持
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-900">
                  本アプリが位置情報に関連して取得する利用者情報
                </h3>
                <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    端末のGPS情報（利用者の許可がある場合のみ）
                  </p>
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    近隣ユーザーとのマッチング、距離表示
                  </p>
                  <p className="text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      備考:{" "}
                    </strong>
                    位置情報はリアルタイムでの共有は行わず、マッチング目的のみに使用します
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-900">
                  本アプリが自動的に取得する利用者情報
                </h3>
                <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    アプリ内のユーザー識別子、デバイスID、端末モデル名、言語・地域設定、IPアドレス、OS名、OSバージョン
                  </p>
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    アカウント管理、不正利用防止、データ分析、アプリ障害の原因分析
                  </p>
                  <p className="text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      第三者提供:{" "}
                    </strong>
                    有り（以下の情報収集モジュール提供事業者に提供します）
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                2.
                情報収集モジュール提供事業者が情報収集モジュールで自動的に取得する利用者情報
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-900">
                  Firebase (Google LLC)
                </h3>
                <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    インスタンスID、Firebaseが発行した識別子、アプリの起動・操作情報等の利用履歴、アプリクラッシュ時の技術情報
                  </p>
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    ユーザー認証、データ保存、プッシュ通知、データ分析、アプリクラッシュの原因分析
                  </p>
                  <p className="text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      詳細:{" "}
                    </strong>
                    <a
                      href="https://firebase.google.com/support/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mono-700 hover:text-mono-950 transition-colors underline underline-offset-4"
                    >
                      https://firebase.google.com/support/privacy
                    </a>
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mono-900">
                  Google AdMob (Google LLC)
                </h3>
                <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl mb-6">
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      取得項目:{" "}
                    </strong>
                    広告識別子、端末情報、広告表示・クリック情報
                  </p>
                  <p className="mb-4 text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      利用目的:{" "}
                    </strong>
                    広告配信、広告効果測定
                  </p>
                  <p className="text-mono-700 text-lg">
                    <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                      詳細:{" "}
                    </strong>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mono-700 hover:text-mono-950 transition-colors underline underline-offset-4"
                    >
                      https://policies.google.com/privacy
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                3. データの保持期間
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <ul className="list-disc list-inside space-y-4 text-mono-700 text-lg leading-relaxed">
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
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                4. 利用者情報の取得・利用に関する同意
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <p className="text-mono-700 text-lg leading-relaxed">
                本アプリおよび本サービスは本アプリケーション・プライバシーポリシーをご確認いただき、内容を理解したうえでご利用ください。ご利用者は本アプリをインストールする際に本アプリケーション・プライバシーポリシーをご確認ください。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                5. 運営者によるデータアクセスについて
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <p className="mb-6 text-mono-700 text-lg">
                当方は、以下の限定的な場合において、ユーザーの個人情報（メールアドレス、電話番号など）にアクセスすることがあります：
              </p>
              <ul className="list-disc list-inside space-y-3 text-mono-700 text-lg leading-relaxed mb-6">
                <li>
                  アカウント復旧やパスワードリセット等のユーザーサポート対応
                </li>
                <li>不正利用や違反行為の調査</li>
                <li>通報対応や安全性確保のための調査</li>
                <li>法的要請への対応</li>
              </ul>
              <p className="text-mono-700 text-lg leading-relaxed">
                当方は、上記の目的以外でユーザーの個人情報を積極的に確認することはありません。また、アクセス権限は必要最小限の担当者のみに付与し、適切なセキュリティ対策のもとで管理します。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                6. 未成年者の利用について
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <p className="text-mono-700 text-lg leading-relaxed">
                本アプリは18歳以上の方を対象としたサービスです。18歳未満の方はご利用いただけません。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                7. 利用者情報の取得停止等
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl">
                <p className="text-mono-700 text-lg leading-relaxed mb-4">
                  <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                    位置情報の取得停止:{" "}
                  </strong>
                  デバイスの設定から位置情報の許可を変更できます。
                </p>
                <p className="text-mono-700 text-lg leading-relaxed mb-4">
                  <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                    プッシュ通知の停止:{" "}
                  </strong>
                  デバイスの設定またはアプリ内の設定から変更できます。
                </p>
                <p className="text-mono-700 text-lg leading-relaxed mb-4">
                  <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                    アカウント削除:{" "}
                  </strong>
                  アプリ内の設定から退会手続きを行うことができます。
                </p>
                <p className="text-mono-700 text-lg leading-relaxed">
                  その他の利用者情報の取得停止をご希望の場合は、以下の問い合わせ窓口にご連絡ください。
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                8. 問い合わせ窓口
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <div className="bg-white/80 backdrop-blur-sm border border-mono-200 p-8 rounded-xl">
                <p className="mb-6 text-mono-700 text-lg">
                  利用者情報の取り扱いに関するお問い合わせ、ご相談は下記メールにてお受けします。
                </p>
                <p className="mb-4 text-lg">
                  <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                    運営者名:{" "}
                  </strong>
                  <span className="text-mono-700">
                    {LINKS.site.name}運営事務局
                  </span>
                </p>
                <p className="text-lg">
                  <strong className="text-mono-900 font-mono uppercase tracking-wider text-sm">
                    Email:{" "}
                  </strong>
                  <a
                    href="mailto:vibery.official.app@gmail.com"
                    className="text-mono-700 hover:text-mono-950 transition-colors underline underline-offset-4"
                  >
                    vibery.official.app@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-mono-950">
                9. 本アプリケーション・プライバシーポリシーの変更
              </h2>
              <div className="w-12 h-px bg-mono-300 mb-8"></div>
              <p className="text-mono-700 text-lg leading-relaxed">
                本アプリのバージョンアップ等に伴い、本アプリケーション・プライバシーポリシーを変更することがあります。重要な変更がある場合は、アプリ内でお知らせします。
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
