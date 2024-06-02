import { Transition } from '@/components/transition'
import type React from 'react'

export default function MovieNameLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Transition>{children}</Transition>
}
