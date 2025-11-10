import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI導入コンサルティング - 中小企業向けAI戦略支援",
  description: "地方中小企業のためのAIコンサルティングサービス。実践的なAI導入支援で企業の課題を解決します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
