import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'tortilla blog',
  description: "This site is a Tortilla's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
