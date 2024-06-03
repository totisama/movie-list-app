'use server'

import { client } from '@/lib/client'
import { gql } from 'graphql-request'
import { revalidatePath } from 'next/cache'

const CREATE_LIST = gql`
  mutation Mutation($imdbId: String!, $listId: Int!) {
    addMovie(imdbId: $imdbId, listId: $listId) {
      id
      imdb_id
      movie {
        Title
      }
      movie_list_id
      created_at
    }
  }
`

export async function addMovieToList(listId: number, movieId: string) {
  await client.request(CREATE_LIST, {
    imdbId: movieId,
    listId,
  })

  revalidatePath('/', 'layout')

  return true
}
