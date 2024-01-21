// import { TutorialBlock } from '@/app/components/blocks/tutorial/TutorialBlock'
import React from 'react'
import getData from '@/app/utils/getData'
import TutorialBlock from '@/app/components/blocks/tutorial/TutorialBlock'

export default async function TutorialPage() {
    const data = await getData("tutorials")
  return (
    <div>
      <TutorialBlock data={data.block.tutorials}/>
    </div>
  )
}
