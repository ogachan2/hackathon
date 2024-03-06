import prisma from '@/lib/prisma'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import RefreshButton from './refresh-button'

export default async function Table() {
  const startTime = Date.now()
  const matchrecords = await prisma.matchrecords.findMany({
    orderBy: [
      {
      matchdate: 'asc',
      }
    ]
  }
    
  )

  const headers = [
    {
        matchdate: 'Date',
        matchname: 'Matchname',
        team: 'Team',
        place: 'Place',
        result: 'Result',
        members: 'Members',
        formation: 'Formation',
      },
]

  
  console.log(matchrecords)
  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">

      {headers.map((header) => (
          <div
            className="flex items-center justify-between py-3"
          >
            <div className="flex flex-wrap justify-between w-full">
              
              <div className="flex space-x-4 w-full">
                <p className="flex-grow text-center font-medium">{header.matchdate}</p>
                <p className="flex-grow text-center font-medium">{header.matchname}</p>
                <p className="flex-grow text-center font-medium">{header.team}</p>
                <p className="flex-grow text-center font-medium">{header.place}</p>
                <p className="flex-grow text-center font-medium">{header.result}</p>
                <p className="flex-grow text-center font-medium">{header.members}</p>
                <p className="flex-grow text-center font-medium">{header.formation}</p>
              </div>
            </div>

          </div>
        ))}

        {matchrecords.map((matchrecord: any) => (
         <div
         key={matchrecord.id}
         className="flex flex-wrap justify-between py-3"
       >
         <div className="flex flex-wrap justify-between w-full">
           <div className="flex space-x-4 w-full">
             <p className="flex-grow text-center font-medium">{matchrecord.matchdate}</p>
             <p className="flex-grow text-center font-medium">{matchrecord.matchname}</p>
             <p className="flex-grow text-center font-medium">{matchrecord.team}</p>
             <p className="flex-grow text-center font-medium">{matchrecord.place}</p>
             <p className="flex-grow text-center font-medium">{matchrecord.result}</p>
             <p className="flex-grow text-center font-medium">{matchrecord.members}</p>
             <p className="flex-grow text-center font-medium">{matchrecord.formation}</p>
           </div>
         </div>
       </div>
        ))}
      </div>
    </div>
  )
}
