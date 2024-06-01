'use client'

import { addMovieToList } from '@/actions/add-movie-to-list'
import { type MovieList } from '@/types'
import { useState, useTransition } from 'react'

export const AddToList = ({
  movieLists,
  movieId,
}: {
  movieLists: MovieList[]
  movieId: string
}) => {
  const [isPending, startTransition] = useTransition()
  const [listId, setList] = useState('')

  const addMovie = async () => {
    if (listId === '') {
      return
    }

    startTransition(async () => {
      await addMovieToList(parseInt(listId), movieId)
    })
  }

  return (
    <div className='flex flex-col space-y-2'>
      <div>
        <label
          htmlFor='location'
          className='block text-sm font-medium leading-3 text-white'
        >
          My lists
        </label>
        <select
          id='location'
          name='location'
          className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm'
          onChange={(e) => {
            setList(e.target.value)
          }}
        >
          <option value=''>Select a list</option>
          {movieLists.map((list) => (
            <option
              key={list.id}
              value={list.id}
            >
              {list.name}
            </option>
          ))}
        </select>
      </div>
      <button
        disabled={isPending || listId === ''}
        onClick={addMovie}
        className='bg-green-500 text-white py-1 rounded-xl transition-all duration-300 ease-in-out enabled:hover:shadow-xl enabled:hover:scale-105 disabled:opacity-50'
      >
        Add to list
      </button>
    </div>
  )
}
