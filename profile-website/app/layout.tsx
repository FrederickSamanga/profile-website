import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import ThreeScene from '@/components/ThreeScene';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frederick Samanga | Web Developer',
  description: 'A passionate full-stack developer crafting beautiful and functional digital experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ThreeScene />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}