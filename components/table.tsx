import prisma from '@/lib/prisma'
import { revalidatePath } from "next/cache";
import RefreshButton from './refresh-button'
import DeleteButton from './delete-button'

export default async function Table() {

  const matchrecords = await prisma.matchrecords.findMany({
    orderBy: [
      {
      matchdate: 'asc',
      }
    ]
  }
    
  )

  const header = 
    {
        id: 0,
        matchdate: 'Date',
        matchname: 'Name',
        team: 'Team',
        place: 'Place',
        result: 'Result',
        category: 'Category',
        formation: 'Formation',
        delete: 'Delete'
      }

  
  console.log(matchrecords)
const matchrecordsWithHeader = [ header , ...matchrecords]
  

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg  mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">

   
        

        {matchrecordsWithHeader.map((matchrecord: any) => (
         <div
         key={matchrecord.id}
         className="flex flex-wrap justify-between py-3"
       >
         <div className="flex flex-wrap justify-between w-full">
           <div className="flex w-full">
             <p className="flex-grow text-center font-medium text-sm w-10">{matchrecord.matchdate}</p>
             <p className="flex-grow text-center font-medium text-sm w-10">{matchrecord.matchname}</p>
             <p className="flex-grow text-center font-medium text-sm w-10">{matchrecord.team}</p>
             <p className="flex-grow text-center font-medium text-sm w-10">{matchrecord.place}</p>
             <p className="flex-grow text-center font-medium text-sm w-10">{matchrecord.result}</p>
             <p className="flex-grow text-center font-medium text-sm w-10">{matchrecord.category}</p>
             <p className="flex-grow text-center font-medium text-sm w-10">{matchrecord.formation}</p>
             <DeleteButton matchid={matchrecord.id}/>
           </div>
         </div>
       </div>
        ))}
      </div>
    </div>
  )
}
