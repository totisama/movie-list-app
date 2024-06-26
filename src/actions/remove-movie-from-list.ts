'use server'

import { client } from '@/lib/client'
import { gql } from 'graphql-request'
import { revalidatePath } from 'next/cache'

const REMOVE_MOVIE = gql`
  mutation Mutation($removeMovieId: Int!, $listId: Int!) {
    removeMovie(id: $removeMovieId, listId: $listId)
  }
`

export const removeMovieFromList = async (movieId: number, listId: number) => {
  await client.request(REMOVE_MOVIE, {
    removeMovieId: movieId,
    listId,
  })

  revalidatePath('/', 'layout')
}
