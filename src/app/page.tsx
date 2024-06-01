import { MovieCard } from '@/components/movie-card'
import { useMovies } from '@/hooks/useMovies'

export default async function Home() {
  const { movies } = await useMovies({})

  return (
    <div className='flex min-h-screen flex-col items-center justify-between pt-10 px-10'>
      <h1 className='text-6xl text-[#F33F3F]'>Movies</h1>
      <section className='mt-10 flex justify-center flex-wrap gap-5'>
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.name}
            movie={movie}
            index={index}
          />
        ))}
      </section>
    </div>
  )
}
