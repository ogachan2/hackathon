'use client'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()
  const { register, handleSubmit, resetField  } = useFormContext()
  const resetform = () => {
    resetField('matchdate')
    resetField('matchname')
    resetField('team')
    resetField('place')
    resetField('result')
    resetField('category')
    resetField('formation')
  }

  const onSubmit = async (data: any) => {
    console.log(data.matchdate)
    router.push(`/send?matchdate=${encodeURIComponent(data.matchdate)}&matchname=${encodeURIComponent(data.matchname)}&team=${encodeURIComponent(data.team)}&place=${encodeURIComponent(data.place)}&result=${encodeURIComponent(data.result)}&category=${encodeURIComponent(data.category)}&formation=${encodeURIComponent(data.formation)}`)
  }
  useEffect(() => {
    resetform()
  },[])

  return (
    <div className="content-center min-h-7">
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl h-full mx-auto w-full">
        <div className="flex flex-col justify-between items-center mb-4 space-y-8">
      <h1>入力</h1>
          <div className="divide-y divide-gray-900/5">
      <div className="flex flex-wrap justify-between w-full">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row space-x-10">
                  <label className="place-self-center w-20" htmlFor="matchdate">Matchdate</label>
                  <input id="matchdate" {...register('matchdate')} />
              </div>
              <div className="flex flex-row space-x-10">
                  <label className="place-self-center w-20" htmlFor="matchname">Matchname</label>
                  <input id="matchname" {...register('matchname')} />
              </div>
              <div className="flex flex-row space-x-10">
                  <label className="place-self-center w-20" htmlFor="team">Team</label>
                  <input id="team" {...register('team')} />
              </div>
              <div className="flex flex-row space-x-10">
                  <label className="place-self-center w-20" htmlFor="place">Place</label>
                  <input id="place" {...register('place')} />
              </div>
              <div className="flex flex-row space-x-10">
                  <label className="place-self-center w-20" htmlFor="result">Result</label>
                  <input id="result" {...register('result')} />
              </div>
              <div className="flex flex-row space-x-10">
                  <label className="place-self-center w-20" htmlFor="category">Category</label>
                  <input id="category" {...register('category')} />
              </div>
              <div className="flex flex-row space-x-10">
                  <label className="place-self-center w-20" htmlFor="formation">Formation</label>
                  <input id="formation" {...register('formation')} />
              </div>
                  <button type="submit">Confirm</button>
          </form>
      </div>
          </div>
        </div>
        </div>
    </div>
  )
}