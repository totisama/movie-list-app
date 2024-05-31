'use client'

import { useRouter } from 'next/navigation'
import type React from 'react'
import { useTransition } from 'react'

interface RemoveButtonProps {
  removeFunction: (id: number) => Promise<void>
  children: React.ReactNode
  id: string
  redirect: string
}

export const RemoveButton = ({
  removeFunction,
  children,
  id,
  redirect,
}: RemoveButtonProps) => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const removeList = async () => {
    startTransition(async () => {
      await removeFunction(parseInt(id))
      router.push(redirect)
    })
  }

  return (
    <button
      disabled={isPending}
      onClick={removeList}
      className='py-1 px-2 text-base rounded-xl bg-[#F33F3F] duration-300 ease-in-out transition-all enabled:hover:scale-105 disabled:opacity-60'
    >
      {children}
    </button>
  )
}
