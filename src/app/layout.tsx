import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { MainNav } from '@/components/main-nav'
import Image from 'next/image'
import { MobileNav } from '@/components/mobile-nav'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'La media digital',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/logo_lmd.png" sizes="32x32" type="image/png"/>
      </head>
      <body className={cn('antialiased bg-background scroll-smooth relative overflow-x-hidden', inter.className)}>
        <MainNav/>
        
       
        
        {children}
        </body>
    </html>
  )
}
