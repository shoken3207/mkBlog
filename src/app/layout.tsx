import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MkFooter, MkHeader } from '@/app/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js ミートアップ【鹿児島.mk】 サンプルブログ',
  description:
    '2023-09-15 のNext.js ミートアップ【鹿児島.mk】で作成したサンプルブログです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MkHeader />
        {children}
        <MkFooter />
      </body>
    </html>
  );
}
