import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: '신영이앤디',
  description: '방수 도료, 건축 내외장재, 도로 포장, 교통안전 분야의 자재 공급 및 시공 전문 업체',
  openGraph: {
    title: '신영이앤디',
    description: '방수 도료, 건축 내외장재, 도로 포장, 교통안전 분야의 자재 공급 및 시공 솔루션을 제공합니다.',
    url: 'https://www.',
    siteName: '신영이앤디',
    images: [
      {
        url: 'https://www./images/og_image.jpg',
        width: 1200,
        height: 630,
        alt: '신영이앤디',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': '',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
