import { getMovieLists } from '@/actions/get-movie-lists'
import { AddToList } from '@/components/add-to-list-'
import { BackButton } from '@/components/back-button'
import { useMovies } from '@/hooks/useMovies'
import Image from 'next/image'

interface MoviePageProps {
  params: {
    id: string
  }
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = params
  const { movies } = await useMovies({ id })
  const movieLists = await getMovieLists()

  if (movies.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center gap-5 w-full min-h-dvh text-center'>
        <h1 className='text-4xl'>Movie not found :(</h1>
        <BackButton />
      </div>
    )
  }

  const movie = movies[0]
  const ratingColor =
    movie.rating >= 8
      ? 'text-green-500'
      : movie.rating >= 6
        ? 'text-yellow-500'
        : 'text-red-500'

  return (
    <div className='py-10 px-10 lg:py-12 lg:px-24'>
      <BackButton />
      <section className='flex flex-col mt-5 gap-10 items-center lg:flex-row lg:items-start lg:justify-center lg:gap-24'>
        <div className='flex flex-col items-start gap-5 lg:w-1/3 lg:h-full lg:max-h-[500px]'>
          <Image
            priority
            className='rounded-3xl'
            width={500}
            height={500}
            src={movie.image_url}
            alt={`${movie.name} image`}
          />
          <AddToList
            movieLists={movieLists}
            movieId={id}
          />
        </div>
        <div className='lg:w-2/3 lg:mt-16'>
          <h1 className='text-center lg:text-start text-[#F33F3F] text-5xl'>
            {movie.name}
          </h1>
          <div className='space-y-3 mt-10 mb-5'>
            <h2 className='text-2xl font-bold'>
              Actors:{' '}
              <span className='text-lg text-gray-400 font-semibold'>
                {movie.actors.join(', ')}
              </span>
            </h2>
            <h2 className='text-2xl font-bold'>
              Directors:{' '}
              <span className='text-lg text-gray-400 font-semibold'>
                {movie.directors.join(', ')}
              </span>
            </h2>
            <h2 className='text-2xl font-bold'>
              Genres:{' '}
              <span className='text-lg text-gray-400 font-semibold'>
                {movie.genre.join(', ')}
              </span>
            </h2>
            <div className='w-full flex justify-center gap-10'>
              <h2 className='text-2xl font-bold'>
                Year:{' '}
                <span className='text-white font-semibold'>{movie.year}</span>
              </h2>
              <h2 className='text-2xl font-bold'>
                Rating:{' '}
                <span className={`${ratingColor} font-semibold`}>
                  {movie.rating}
                </span>
              </h2>
            </div>
          </div>
          <p className='text-lg'>{movie.desc}</p>
        </div>
      </section>
    </div>
  )
}
