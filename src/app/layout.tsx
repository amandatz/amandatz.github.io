import '@styles/main.scss';

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Container, Footer, Header } from '@components'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Personal blog',
  description: 'Personal blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  )
}
