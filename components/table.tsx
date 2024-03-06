import prisma from '@/lib/prisma'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import RefreshButton from './refresh-button'

export default async function Table() {
  const startTime = Date.now()
  // const users = await prisma.users.findMany()

  const headers = [
    {
        date: 'Date',
        matchname: 'Matchname',
        team: 'Team',
        place: 'Place',
        result: 'Result',
        members: 'Members',
        formation: 'Formation',
      },
]

  const users = [
    {
        id: 1,
        date: '2024/3/7',
        matchname: 'semifinal',
        team: 'Ateam',
        place: 'xxstatium',
        result: '1-0',
        members: 'aa',
        formation: 'xxx',
      },
]
  console.log(users)
  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">

      {headers.map((header) => (
          <div
            key={header.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              
              <div className="flex flex-row space-x-4">
                <p className="font-medium">{header.date}</p>
                <p className="font-medium">{header.matchname}</p>
                <p className="font-medium">{header.team}</p>
                <p className="font-medium">{header.place}</p>
                <p className="font-medium">{header.result}</p>
                <p className="font-medium">{header.members}</p>
                <p className="font-medium">{header.formation}</p>
              </div>
            </div>

          </div>
        ))}

        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              
              <div className="flex flex-row space-x-4">
                <p className="font-medium">{user.date}</p>
                <p className="font-medium">{user.matchname}</p>
                <p className="font-medium">{user.team}</p>
                <p className="font-medium">{user.place}</p>
                <p className="font-medium">{user.result}</p>
                <p className="font-medium">{user.members}</p>
                <p className="font-medium">{user.formation}</p>
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}
