'use server'

import { MY_EMAIL_KEY } from '@/constants'
import { client } from '@/lib/client'
import { type MovieList } from '@/types'
import { gql } from 'graphql-request'

const CREATE_LIST = gql`
  mutation CreateList($input: CreateListInput!) {
    createList(input: $input) {
      id
      name
      email
      created_at
    }
  }
`

export async function createList(nameValue: string) {
  const { createList } = await client.request<{
    createList: MovieList
  }>(CREATE_LIST, {
    input: {
      email: MY_EMAIL_KEY,
      name: nameValue,
    },
  })

  return createList
}
