import prisma from '../lib/prisma'

async function main() {
  const response = await Promise.all([
    prisma.matchrecords.upsert({
      where: { id: 1 },
      update: {},
      create: {
        matchdate: '2024/3/7',
        matchname: 'semifinal',
        team: 'Ateam',
        place:'Bground',
        result:'1-0',
        members:'aaa',
        formation:'xxx'
      },
    }),

    prisma.matchrecords.upsert({
      where: { id: 2 },
      update: {},
      create: {
        matchdate: '2024/3/8',
        matchname: 'section3',
        team: 'Bteam',
        place:'Aground',
        result:'1-3',
        members:'bbb',
        formation:'yyy'
      },
    }),

    prisma.matchrecords.upsert({
      where: { id: 3 },
      update: {},
      create: {
        matchdate: '2024/3/9',
        matchname: 'traingmatch',
        team: 'Cteam',
        place:'Cground',
        result:'3-3',
        members:'ccc',
        formation:'zzz'
      },
    }),
    
    
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
