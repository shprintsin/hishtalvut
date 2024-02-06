import TutorialCard from '@/app/components/blocks/tutorial/TutorialCard'
import getData from '@/app/utils/getData'
import React from 'react'

export default async function TutorialPage({params}) {
const data = await getData(`tutorials/${params.slug}`)
  return (
    <div>
        
 <TutorialCard data={data} />
    </div>
  )
}
