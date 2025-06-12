import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sarthak Tambde | Full Stack & Flutter Enthusiast Developer',
  description: 'Professional portfolio showcasing innovative web development and design projects',
  keywords: 'full stack developer, web developer, portfolio, projects, react, next.js, flutter,', 
  icons: {
    icon: '/favicon.png', 
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sarthaktambde.com',
    title: 'Sarthak Tambde | Full Stack Developer',
    description: 'Professional portfolio showcasing innovative web development and design projects',
    siteName: 'Sarthak Tambde Portfolio',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Sarthak Tambde | Full Stack Developer',
  //   description: 'Professional portfolio showcasing innovative web development and design projects',
  //   creator: '@yourusername',
  // },
  authors: [{ name: 'Sarthak Tambde' }],
  creator: 'Sarthak Tambde',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}