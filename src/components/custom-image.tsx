'use client'

import Image from 'next/image'
import { useState } from 'react'

export const CustomImage = ({
  Poster,
  index,
  Title,
}: {
  Poster: string
  index: number
  Title: string
}) => {
  const [error, setError] = useState(false)

  return (
    <Image
      src={error ? '/notFound.webp' : Poster}
      alt={`${Title} image`}
      width={500}
      height={500}
      priority={index <= 10}
      onError={() => {
        setError(true)
      }}
      className='px-2'
    />
  )
}
