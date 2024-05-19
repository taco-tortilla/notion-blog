import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/common/Header';
import { Categories } from './components/common/Categories';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'tortilla blog',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className="grid grid-cols-12 gap-10 p-14">
          {children}
          <Categories />
        </div>
      </body>
    </html>
  );
}
