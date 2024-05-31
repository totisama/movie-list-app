import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import type React from 'react'
import AsideMenu from '@/components/aside-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies manager',
  description: 'Create and manage your movie lists',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        id='app'
        className={`${inter.className} h-screen p-2 gap-2`}
      >
        <aside className='[grid-area:aside] flex flex-col overflow-y-auto'>
          <AsideMenu />
        </aside>
        <main className='[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
