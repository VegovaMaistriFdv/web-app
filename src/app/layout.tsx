import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header/Header'
import '@/styles/global.sass';
import 'material-icons/iconfont/material-icons.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vegova Fire Department',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  )
}
