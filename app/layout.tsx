import type { Metadata } from 'next';
import { DM_Mono, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-main', subsets: ['latin'] });
const dmMono = DM_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
  title: 'Aakkash Muthukumar | AI Systems Engineer',
  description: 'AI agents, offline-first tools, and dependable software systems by Aakkash Muthukumar.',
  openGraph: {
    title: 'Aakkash Muthukumar | AI Systems Engineer',
    description: 'AI systems that work anywhere. Agents, offline AI, and dependable software.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Aakkash Muthukumar, AI systems that work anywhere' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakkash Muthukumar | AI Systems Engineer',
    description: 'AI systems that work anywhere. Agents, offline AI, and dependable software.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
