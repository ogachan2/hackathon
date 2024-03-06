import prisma from '@/lib/prisma'
import Link from 'next/link'
import ExpandingArrow from "@/components/expanding-arrow";


export default async function Page({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    const matchdate = searchParams.matchdate;
    const matchname = searchParams.matchname;
    const team = searchParams.team;
    const place = searchParams.place;
    const result = searchParams.result;
    const category = searchParams.category;
    const formation = searchParams.formation;


    await prisma.matchrecords.create({
        data: {
            matchdate: matchdate,
            matchname: matchname,
            team: team,
            place: place,
            result: result,
            category: category,
            formation: formation
        },
    });

  
    return (
        <>
            <h1>Send Data Success!!</h1>
            <p>matchdate: {matchdate}</p>
            <p>matchname: {matchname}</p>
            <p>team: {team}</p>
            <p>place: {place}</p>
            <p>result: {result}</p>
            <p>formation: {formation}</p>
            <Link
                href="/?reflesh=true"
                className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
            >
                <p>一覧に戻る</p>
                <ExpandingArrow />
            </Link>
        </>
    );
}