// import { TutorialBlock } from '@/app/components/blocks/tutorial/TutorialBlock'
import React from 'react'
import getData from '@/app/utils/getData'
import TutorialBlock from '@/app/components/blocks/tutorial/TutorialBlock'
import TutorialCard from '@/app/components/blocks/tutorial/TutorialCard'

export default async function TutorialPage() {
    const data = await getData("tutorials")
  return (
      <>
      
<div>
<TutorialBlock data={data}/>
</div>

      </>
  )
}
