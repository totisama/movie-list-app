'use client'

import { type MovieList } from '@/types'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const ListCard = ({
  list,
  index,
}: {
  list: MovieList
  index: number
}) => {
  return (
    <motion.article
      key={list.id}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.05 * index }}
      whileHover={{
        scale: 1.1,
      }}
      className='w-44 rounded-md bg-gray-700/80 lg:w-60'
    >
      <Link
        className='flex py-3 text-2xl w-full max-w-44 lg:max-w-60 px-5'
        href={`/my-lists/${list.id}`}
      >
        {list.name}
      </Link>
    </motion.article>
  )
}
