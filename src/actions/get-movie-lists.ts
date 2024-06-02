'use server'

import { MY_EMAIL_KEY } from '@/constants'
import { client } from '@/lib/client'
import { type MovieList } from '@/types'
import { gql } from 'graphql-request'

const GET_LISTS = gql`
  query GetMovieLists($email: String!) {
    getMovieLists(email: $email) {
      id
      name
      email
      created_at
    }
  }
`

export const getMovieLists = async () => {
  const { getMovieLists } = await client.request<{
    getMovieLists: MovieList[]
  }>(GET_LISTS, {
    email: MY_EMAIL_KEY,
  })

  return getMovieLists
}
