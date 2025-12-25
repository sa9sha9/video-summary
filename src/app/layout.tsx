import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VideoSum - 動画を画像とテキストでまとめる",
  description: "著作権フリーの動画を、画像とテキストで簡潔にまとめるサービス",
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
