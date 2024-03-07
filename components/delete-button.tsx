'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { deleterecord } from './delete'

type Props = {
  matchid: string
}

export default function DeleteButton(
  {matchid}: Props
) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      className={`${
        isPending ? 'cursor-not-allowed text-gray-400' : ''
      } text-sm text-gray-500 hover:text-gray-900`}
      disabled={isPending}
      onClick={(e: any) => {
        console.log(e)
        console.log(matchid)
        deleterecord(matchid)
        startTransition(() => {
          router.refresh()
        })
      }}
    >
      {isPending ? 'deleting...' : 'Delete'}
    </button>
  )
}
