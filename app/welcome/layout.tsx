import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { caudex } from '../../lib/fonts'

import "../globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MyStory - Begin your Journey',
  description: 'Your Legacy, Your Treasure, MyStory',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={caudex.className}>
      <body>{children}</body>
    </html>
  );
}
