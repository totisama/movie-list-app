'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'

export const AsideItem = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li
      className={`rounded-3xl ${isActive && 'bg-gray-700/50'} hover:bg-gray-700/50`}
    >
      <Link
        className='flex gap-2 text-white items-center py-2 px-5 font-medium transition duration-300 hover:scale-110'
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
