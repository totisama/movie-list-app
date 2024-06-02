import { deleteList } from '@/actions/delete-list'
import { getMovieList } from '@/actions/get-movie-list'
import { MoviePreview } from '@/components/movie-preview'
import { RemoveButton } from '@/components/remove-button'

export default async function ListPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const { movieList, movies } = await getMovieList(id)

  return (
    <div className='w-full flex flex-col py-5 items-center'>
      <div className='w-full flex items-center justify-around'>
        <div className='w-1/3' />
        <div className='w-1/3 overflow-clip'>
          <h1 className='text-4xl'>{movieList.name}</h1>
        </div>
        <div>
          <RemoveButton
            id={id}
            removeFunction={deleteList}
            redirect='/my-lists'
          >
            Delete list
          </RemoveButton>
        </div>
      </div>
      <section className='mt-10 flex justify-center px-10 flex-wrap gap-5 lg:justify-start'>
        {movies.map((movie, index) => (
          <MoviePreview
            index={index}
            key={movie.id}
            movie={movie.movie}
          />
        ))}
      </section>
    </div>
  )
}
