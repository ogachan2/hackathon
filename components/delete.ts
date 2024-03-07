"use server"
import prisma from '@/lib/prisma'

export const deleterecord = async (matchid: string) => {
 console.log('delete')
 console.log(matchid)
 const deletematchrecords = await prisma.matchrecords.delete({
    where: {
      id: Number(matchid),
    },
  })
  console.log(deletematchrecords)
}