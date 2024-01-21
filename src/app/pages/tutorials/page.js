import { TutorialBlock } from '@/app/components/blocks/tutorial/TutorialBlock'
import React from 'react'
import getData from '@/app/utils/GetData'

export default async function TutorialPages() {
    const data = await getData("tutorials")

    return (
    <div>
        
        {/* <TutorialBlock data={}/> */}
    </div>
  )
}
