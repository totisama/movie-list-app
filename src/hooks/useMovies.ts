import { type ImdbMovie } from '@/types'

export const useMovies = async ({ id = '' }: { id?: string }) => {
  const res = await fetch(
    'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json?authuser=1'
  )
  let movies: ImdbMovie[] = await res.json()

  if (id !== '') {
    movies = movies.filter((movie) => movie.imdb_url.includes(`/${id}`))
  }

  return { movies }
}
