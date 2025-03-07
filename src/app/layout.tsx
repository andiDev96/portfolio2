import './globals.css'
import type { Metadata } from 'next'
import {Inter} from 'next/font/google' 

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Andreas Unterholzner | Portfolio',
  description: 'Portfolio Professionale creato con Next.js e Tailwind CSS'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='it'>
      <body className={inter.className}>
        <main className='min-h-screen bg-slate-50 dark:bg-slate-900'>
          {children}
        </main>
      </body>






    </html>
  )
}