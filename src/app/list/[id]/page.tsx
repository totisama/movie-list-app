import { deleteList } from '@/actions/delete-list'
import { getMovieList } from '@/actions/get-movie-list'
import { RemoveButton } from '@/components/remove-button'
import Image from 'next/image'

export default async function ListsPage({
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
            redirect='/lists'
          >
            Delete list
          </RemoveButton>
        </div>
      </div>
      <section className='flex flex-wrap'>
        {movies.map((movie) => (
          <article
            key={movie.id}
            className='w-1/4 p-2'
          >
            <Image
              width={300}
              height={300}
              src={movie.movie.Poster}
              alt={movie.movie.Title}
            />
            <h2>{movie.movie.Title}</h2>
            <p>{movie.movie.Year}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
