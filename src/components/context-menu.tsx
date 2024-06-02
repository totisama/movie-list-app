'use client'

import { removeMovieFromList } from '@/actions/remove-movie-from-list'
import {
  ContextMenu as CM,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { useRouter } from 'next/navigation'
import type React from 'react'

export const ContextMenu = ({
  movieId,
  listId,
  children,
}: {
  movieId: number
  listId: number
  children: React.ReactNode
}) => {
  const router = useRouter()

  const removeFromList = async () => {
    await removeMovieFromList(movieId, listId)
    router.refresh()
  }

  return (
    <CM>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          className='hover:cursor-pointer'
          onClick={removeFromList}
        >
          Remove from list
        </ContextMenuItem>
      </ContextMenuContent>
    </CM>
  )
}
