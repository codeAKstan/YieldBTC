import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YieldBTC',
  description: 'YieldBTC is a yield aggregator for Bitcoin, built on the Stacks blockchain.',
  generator: 'YieldBTC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
