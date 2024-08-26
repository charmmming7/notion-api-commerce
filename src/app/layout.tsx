import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Layout from '@/app/_components/Layout';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shopping Mall',
  description: 'shopping mall web site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div id="wrap">
          <Suspense>
            <Layout>{children}</Layout>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
