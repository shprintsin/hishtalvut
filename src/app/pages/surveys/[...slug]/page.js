import getData from '@/app/utils/getData'
import { useParams } from 'next/navigation'
import React from 'react'
import SurveyPage from '../SurveyPage'

export default async function page({params}) {
  const query = params.slug.join("/")
  const data = await getData(`surveys/${query}`)
  return (

      <SurveyPage data={data.survey.content}/>
  )
}
