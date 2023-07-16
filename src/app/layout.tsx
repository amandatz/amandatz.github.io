import '@styles/main.scss';

import type { Metadata } from 'next'
import { Container, Footer, Header } from '@components'

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
    <html lang="en">
      <body>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  )
}
