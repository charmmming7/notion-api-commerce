import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../css/globals.css';

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
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/list">List</a>
            </li>
          </ul>
          {children}
        </div>
      </body>
    </html>
  );
}
