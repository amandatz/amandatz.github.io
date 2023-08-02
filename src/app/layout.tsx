import '~/styles/main.css';

import type { Metadata } from 'next'
import { Footer, Header } from '~/components'

export const metadata: Metadata = {
  title: 'Amanda Zanette'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='relative bg-black text-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
