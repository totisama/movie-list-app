'use server'

import { client } from '@/lib/client'
import { gql } from 'graphql-request'

const REMOVE_MOVIE = gql`
  mutation Mutation($removeMovieId: Int!, $listId: Int!) {
    removeMovie(id: $removeMovieId, listId: $listId)
  }
`

export const removeMovieFromList = async (movieId: number, listId: number) => {
  console.log('movieId', movieId)
  console.log('listId', listId)
  await client.request(REMOVE_MOVIE, {
    removeMovieId: movieId,
    listId,
  })
}
