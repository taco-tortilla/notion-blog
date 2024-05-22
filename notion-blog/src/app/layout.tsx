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
        <div className="container mx-auto px-5 md:px-14">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-5 md:py-14">
            {children}
            <Categories />
          </div>
        </div>
      </body>
    </html>
  );
}
