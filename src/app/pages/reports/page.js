import React from 'react'
import getData from '@/app/utils/getData'

export default async function ReportPage() {
  const data = await getData("report")

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
