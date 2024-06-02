import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/app/globals.css'
import type React from 'react'
import AsideMenu from '@/components/aside-menu'
import { Suspense } from 'react'
import Loading from './loading'

const nunito = Nunito({ subsets: ['latin'] })

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
        className={`${nunito.className} h-screen p-2 gap-2`}
      >
        <aside className='[grid-area:aside] flex flex-col overflow-y-auto'>
          <AsideMenu />
        </aside>
        <main className='[grid-area:main] rounded-lg bg-zinc-950 overflow-y-auto w-full'>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  )
}
