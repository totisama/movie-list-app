import { getMovieLists } from '@/actions/get-movie-lists'
import { ListCard } from '@/components/list-card'

export default async function ListsPage() {
  const movieLists = await getMovieLists()

  return (
    <div className='flex min-h-screen flex-col items-center  pt-10 px-10'>
      <h1 className='text-6xl text-[#F33F3F]'>My lists</h1>
      <section className='mt-10 flex justify-center flex-wrap gap-5'>
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
