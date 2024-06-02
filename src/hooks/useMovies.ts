import { getMovies } from '@/actions/get-movies'

export const useMovies = async ({ id = '' }: { id?: string }) => {
  let movies = await getMovies()

  if (id !== '') {
    movies = movies.filter((movie) => movie.imdb_url.includes(`/${id}`))
  }

  return { movies }
}
