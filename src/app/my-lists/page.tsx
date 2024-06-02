import { getMovieLists } from '@/actions/get-movie-lists'
import { ListCard } from '@/components/list-card'
import Link from 'next/link'

export default async function ListsPage({
  searchParams,
}: {
  searchParams: { value?: string }
}) {
  const { value } = searchParams
  let movieLists = await getMovieLists()

  if (value !== '' && value !== undefined) {
    const movieListsFiltered = movieLists.filter((list) =>
      list.name.includes(value)
    )

    movieLists = movieListsFiltered
  }

  return (
    <div className='flex min-h-screen flex-col items-center pt-10 px-10'>
      <h1 className='text-6xl text-[#F33F3F]'>My lists</h1>
      <section className='mt-10 flex justify-center flex-wrap gap-5'>
        {movieLists.length === 0 && (
          <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-4xl text-white'>No list found</h2>
            <Link
              className='bg-[#F33F3F] py-1 px-2 rounded-2xl'
              href='/new-list'
            >
              Create one
            </Link>
          </div>
        )}
        {movieLists.map((list, index) => (
          <ListCard
            key={list.id}
            list={list}
            index={index}
          />
        ))}
      </section>
    </div>
  )
}
