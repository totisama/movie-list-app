'use server'

import { client } from '@/lib/client'
import { gql } from 'graphql-request'
import { revalidatePath } from 'next/cache'

const DELETE_LIST = gql`
  mutation Mutation($deleteListId: Int!) {
    deleteList(id: $deleteListId)
  }
`

export async function deleteList(listId: number) {
  await client.request(DELETE_LIST, {
    deleteListId: listId,
  })

  revalidatePath('/', 'layout')
}
