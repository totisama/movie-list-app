import { deleteList } from '@/actions/delete-list'
import { getMovieList } from '@/actions/get-movie-list'
import { MoviePreview } from '@/components/movie-preview'
import { RemoveButton } from '@/components/remove-button'
import Link from 'next/link'

export default async function ListPage({
  params: { id },
  searchParams,
}: {
  params: { id: string }
  searchParams: { value?: string }
}) {
  const { movieList, movies } = await getMovieList(id)
  const { value } = searchParams
  let moviesList = movies

  if (value !== undefined) {
    if (value !== '' && value !== undefined) {
      moviesList = moviesList.filter((movie) =>
        movie.movie.Title.toLowerCase().includes(
          value.toLowerCase().replaceAll('+', ' ')
        )
      )
    }
  }

  return (
    <div className='w-full flex flex-col py-5 items-center'>
      <div className='w-full flex items-center justify-around'>
        <div className='w-1/3' />
        <div className='w-1/3 overflow-clip'>
          <h1 className='text-5xl text-[#F33F3F]'>{movieList.name}</h1>
        </div>
        <div className='flex flex-col items-center'>
          <RemoveButton
            id={id}
            removeFunction={deleteList}
            redirect='/my-lists'
          >
            Delete list
          </RemoveButton>
          <small>Right click on movie to display menu</small>
        </div>
      </div>
      <section className='mt-10 flex justify-center px-10 flex-wrap gap-5 lg:justify-start'>
        {moviesList.length === 0 && (
          <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-4xl text-white'>No movies added yet</h2>
            <Link
              className='bg-[#F33F3F] py-1 px-2 rounded-2xl'
              href='/'
            >
              Search movies
            </Link>
          </div>
        )}
        {moviesList.map((movie, index) => (
          <MoviePreview
            index={index}
            key={movie.id}
            movie={movie}
            listId={parseInt(id)}
          />
        ))}
      </section>
    </div>
  )
}
