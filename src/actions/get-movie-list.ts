'use server'

import { client } from '@/lib/client'
import { type MovieItem, type MovieList } from '@/types'
import { gql } from 'graphql-request'

const GET_MOVIES_LISTS = gql`
  query GetMovieList($listId: Int!, $getMovieListId: Int!) {
    getMovieListItems(listId: $listId) {
      created_at
      id
      imdb_id
      movie_list_id
      movie {
        Title
        Year
        Poster
        imdbID
        Type
      }
    }
    getMovieList(id: $getMovieListId) {
      name
      id
      email
      created_at
    }
  }
`

export const getMovieList = async (id: string) => {
  const { getMovieList, getMovieListItems } = await client.request<{
    getMovieList: MovieList
    getMovieListItems: MovieItem[]
  }>(GET_MOVIES_LISTS, {
    listId: parseInt(id),
    getMovieListId: parseInt(id),
  })

  return { movieList: getMovieList, movies: getMovieListItems }
}
