import { getMovies } from '@/actions/get-movies'

export const useMovies = async ({
  id = '',
  value = '',
}: {
  id?: string
  value?: string
}) => {
  let movies = await getMovies()

  if (id !== '') {
    movies = movies.filter((movie) => movie.imdb_url.includes(`/${id}`))
  }

  if (value !== '' && id === '') {
    movies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(value.toLowerCase().replaceAll('+', ''))
    )
  }

  return { movies }
}
