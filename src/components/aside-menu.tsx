import { LogoIcon, PlusIcon } from '@/icons'
import { MY_EMAIL_KEY, SIDE_MENU_ITEMS } from '@/constants'
import { AsideItem } from '@/components/aside-item'
import { gql } from 'graphql-request'
import { client } from '@/lib/client'
import { type MovieList } from '@/types'
import Link from 'next/link'

const GET_MOVIES_LIST = gql`
  query GetMovieLists($email: String!) {
    getMovieLists(email: $email) {
      id
      name
      email
      created_at
    }
  }
`

export default async function AsideMenu() {
  const { getMovieLists } = await client.request<{
    getMovieLists: MovieList[]
  }>(GET_MOVIES_LIST, {
    email: MY_EMAIL_KEY,
  })

  return (
    <div className='flex flex-col flex-1 gap-2'>
      <section className='bg-[#080808] py-5 rounded-lg'>
        <div className='mb-8 ml-3'>
          <LogoIcon />
        </div>
        <nav className='space-y-1'>
          {SIDE_MENU_ITEMS.map((item, index) => (
            <AsideItem
              href={item.href}
              key={index}
            >
              {item.icon()}
              {item.value}
            </AsideItem>
          ))}
        </nav>
      </section>
      <section className='bg-[#080808] rounded-lg p-4 flex-1'>
        <h2 className='text-base text-[#9A9A9A]'>My Lists</h2>
        <div className='mt-5'>
          {getMovieLists.map((list, index) => (
            <Link
              key={index}
              className='flex text-white items-center py-2 px-5 font-medium transition-all duration-300 hover:text-[#FFB320] hover:scale-110'
              href={`/lists/${list.id}`}
            >
              {list.name}
            </Link>
          ))}
        </div>
        <Link
          href={'/new-list'}
          className='flex bg-[#F33F3F] text-lg rounded-xl py-2 px-5 mt-5 font-medium items-center gap-1 justify-center text-black transition-all duration-500 hover:scale-105'
        >
          <PlusIcon className='h-5 w-5' />
          Create List
        </Link>
      </section>
    </div>
  )
}
