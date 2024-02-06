import React from 'react'

export default function PageDev() {
  return (
    <div>

        
<div className='flex  w-90'>
<table className="divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>{["id", "slug", "title", "description", "items"].map((item) => (<th>{item}</th>))  }</tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {data.map(({id, slug, title, description, items}) =>{ 
      return(
      <tr className='h-fit'>{[id, slug, title, description].map((item) => (<td className=" max-w-72 h-fit flex-wrap">{item}</td>))}
        <td className="flex-wrap">
        <tr>{["id", "slug", "name"].map((item) => (<th className="text-left text-xs font-medium text-gray-500 uppercase">{item}</th>))} </tr>
         {items.map(({id,slug,name}) => (<tr>{[id, slug, name].map((item) => (<td  className="">{item}</td>))}
            
                </tr>
              ))}
        </td>
      </tr>
    )})}
  </tbody>
</table>
</div>

    </div>
  )
}
