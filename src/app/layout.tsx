import type { Metadata } from 'next';
import Layout from '@/app/_components/Layout';
import { Suspense } from 'react';
import '../styles/globals.css';

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
      <body>
        <div id="wrap">
          <Suspense>
            <Layout>{children}</Layout>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
