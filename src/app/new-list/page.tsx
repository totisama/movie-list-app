'use client'

import { createList } from '@/actions/create-list'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export default function CreateListPage() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [name, setName] = useState('')

  const newList = async () => {
    startTransition(async () => {
      const data = await createList(name)

      router.push(`/list/${data.id}`)
    })
  }

  return (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-0 overflow-auto backdrop-blur flex justify-center items-center'>
      <div className='bg-white w-1/5 py-3 z-50 rounded-lg'>
        <div className='flex space-y-4 flex-col justify-center items-center'>
          <h1 className='text-2xl'>Create list</h1>
          <div className='flex flex-col'>
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              autoFocus
              className='border border-black rounded-lg py-1 px-2'
              type='text'
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <footer className='flex w-1/2 justify-between gap-3'>
            <button
              disabled={isPending}
              onClick={() => {
                router.back()
              }}
              className='bg-[#F33F3F] rounded-xl enabled:hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-80 enabled:hover:shadow-xl text-white p-2'
            >
              Cancel
            </button>
            <button
              disabled={isPending}
              onClick={newList}
              type='button'
              className='bg-green-500 rounded-xl enabled:hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-80 enabled:hover:shadow-xl text-white p-2'
            >
              Create
            </button>
          </footer>
        </div>
      </div>
    </dialog>
  )
}
