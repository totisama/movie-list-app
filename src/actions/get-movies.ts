'use server'

import { type ImdbMovie } from '@/types'

export const getMovies = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json?authuser=1'
  )
  const movies: ImdbMovie[] = await res.json()

  return movies
}
