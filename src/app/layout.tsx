import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LINKS } from "@/config/links";

export const metadata: Metadata = {
  metadataBase: new URL(LINKS.site.url),

  title: {
    default:
      "Vibery - 友達作り・友達探しができる同性SNS | 趣味でつながる新しい出会い方",
    template: "%s | Vibery",
  },

  description:
    "【友達作り・友達探し】Viberyは同性限定のSNS。趣味タグで価値観が合う友達の作り方がわかる、安心・匿名のコミュニティアプリです。",

  keywords: [
    "SNS",
    "友達作り",
    "同性限定",
    "マッチングアプリ",
    "趣味",
    "感性SNS",
    "安心",
    "匿名",
    "友情",
    "コミュニケーション",
    "タグマッチング",
    "同性友達",
    "安全なSNS",
  ],
  authors: [{ name: "Vibery運営事務局" }],
  creator: "Vibery運営事務局",
  publisher: "Vibery運営事務局",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: LINKS.site.url,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: LINKS.site.url,
    siteName: LINKS.site.name,
    title: "Vibery - 同性の友達づくりアプリ",
    description:
      "感性で繋がる、新しい友達づくり。同性限定で安心して趣味や価値観を共有できるコミュニケーションアプリ。",
    images: [
      {
        url: "/images/applogo.jpg",
        width: 1200,
        height: 630,
        alt: "Vibery - 同性の友達づくりアプリ",
      },
    ],
  },

  manifest: "/manifest.json",
  category: "Social Media",
  applicationName: LINKS.site.name,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: LINKS.site.name,
  },

  // ファビコンとアイコンの設定を改善
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  formatDetection: {
    telephone: false,
  },
  verification: {
    // Google Search Console verification (必要に応じて追加)
    // google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* 追加のSEO要素 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* 明示的なファビコン設定 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/icon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* App Store link for iOS */}
        <meta
          name="apple-itunes-app"
          content={`app-id=6739957098, app-argument=${LINKS.site.url}`}
        />

        {/* Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: LINKS.site.name,
              description:
                "同性限定の友達づくりアプリ。恋愛ではなく純粋な友情を育む、安心・安全なコミュニケーション環境を提供します。",
              url: LINKS.site.url,
              applicationCategory: "SocialNetworkingApplication",
              operatingSystem: "iOS",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
              downloadUrl: LINKS.appStore,
              author: {
                "@type": "Organization",
                name: "Vibery運営事務局",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                ratingCount: "100",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-16 md:pt-20 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
