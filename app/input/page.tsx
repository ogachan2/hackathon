'use client'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

export default function Page() {
  const router = useRouter()
  const { register, handleSubmit } = useFormContext()

  const onSubmit = async data => {
    console.log(data.matchdate)
    router.push(`/send?matchdate=${data.matchdate}&matchname=${data.matchname}&team=${data.team}&place=${data.place}&result=${data.result}&members=${data.members}&formation=${data.formation}`)
  }

  return (
    <>
      <h1>入力</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="matchdate">Matchdate</label>
        <input id="matchdate" {...register('matchdate')} />
        <label htmlFor="matchname">Matchname</label>
        <input id="matchname" {...register('matchname')} />
        <label htmlFor="team">Team</label>
        <input id="team" {...register('team')} />
        <label htmlFor="place">Place</label>
        <input id="place" {...register('place')} />
        <label htmlFor="result">Result</label>
        <input id="result" {...register('result')} />
        <label htmlFor="members">Members</label>
        <input id="members" {...register('members')} />
        <label htmlFor="formation">Formation</label>
        <input id="formation" {...register('formation')} />
        <button type="submit">Confirm</button>
      </form>
    </>
  )
}