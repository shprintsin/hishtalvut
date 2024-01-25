  import AboutBlock from '@/app/components/blocks/about/AboutBlock'
import React from 'react'
import getData from '@/app/utils/getData'
 export default async function AboutPage() {
  const data = await getData("about")
  return (
    <>
    <AboutBlock data={data} />
    
    </>
  )
}
