'use client'

import { getMovieList } from '@/actions/get-movie-list'
import { getMovieLists } from '@/actions/get-movie-lists'
import { getMovies } from '@/actions/get-movies'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import TextInput from 'react-autocomplete-input'
import 'react-autocomplete-input/dist/bundle.css'

const ROUTES = {
  '/': async () => await getMovies(),
  '/my-lists': async () => await getMovieLists(),
  '/my-lists/': async (id: string) => await getMovieList(id),
}

export default function AutocompleteInput() {
  const router = useRouter()
  const pathname = usePathname()
  const [options, setOptions] = useState<string[]>([])
  const [value, setValue] = useState('')

  const getHomeListsOptions = async () => {
    const action = ROUTES[pathname as '/' | '/my-lists']
    const values = await action()

    const valuesName = values.map((movie) => movie.name)
    setOptions(valuesName)
  }

  const getMyListOptions = async () => {
    const id = pathname.split('/')[2]
    const action = ROUTES['/my-lists/']
    const values = await action(id)

    const valuesName = values.movies.map((movie) => movie.movie.Title)
    setOptions(valuesName)
  }

  const whatRoute = async () => {
    if (pathname.includes('/my-lists/')) {
      getMyListOptions()
    } else if (pathname === '/my-lists' || pathname === '/') {
      getHomeListsOptions()
    }
  }

  const onChange = (value: string) => {
    const params = new URLSearchParams()
    setValue(value)

    if (value !== null && value !== '' && value !== '+') {
      params.set('value', value)
    }

    const newPath = params.size > 0 ? '?' + params.toString() : pathname

    router.push(newPath)
  }

  useEffect(() => {
    whatRoute()
    setValue('')
  }, [pathname])

  return (
    <TextInput
      value={value}
      className='resize-none w-full py-1.5 rounded-md border-2 px-3 bg-[#080808] text-white placeholder-[#9A9A9A] border-[#1F1F1F]'
      options={options}
      trigger=''
      // @ts-expect-error The input is really a textarea, so it shouldnt give error for this prop
      onChange={onChange}
      rows='1'
      placeholder='Search'
      spacer=''
    />
  )
}
