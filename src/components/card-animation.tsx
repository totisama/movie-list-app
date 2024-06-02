'use client'

import { motion } from 'framer-motion'
import type React from 'react'

export const CardAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.article
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
      className='group relative flex w-44 flex-col items-center rounded-md bg-gray-600 lg:w-60'
    >
      {children}
    </motion.article>
  )
}
