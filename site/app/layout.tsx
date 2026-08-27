import type { Metadata } from 'next';
import { DM_Mono, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-main', subsets: ['latin'] });
const dmMono = DM_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aakkash-muthukumar.taki7153.chatgpt.site'),
  title: {
    default: 'Aakkash Muthukumar | Software Engineer',
    template: '%s | Aakkash Muthukumar',
  },
  description: 'AI products, machine learning, systems, and teaching by Aakkash Muthukumar—built with evidence, explainability, and a curiosity for the layer underneath.',
  openGraph: {
    title: 'Aakkash Muthukumar | Software Engineer',
    description: 'AI products, machine learning, systems, and teaching—built with evidence and a curiosity for the layer underneath.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Aakkash Muthukumar. Software Engineering, Machine Learning, Systems.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakkash Muthukumar | Software Engineer',
    description: 'AI products, machine learning, systems, and teaching—built with evidence and a curiosity for the layer underneath.',
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
