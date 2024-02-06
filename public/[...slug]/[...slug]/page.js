
"use client"
import React from 'react'
import { Separator } from '@/components/ui/separator';
// import UserAvatarMenu from './UserAvatarMenu';
import { FaChevronLeft, FaHome } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import getData from '@/app/utils/getData';

const data = {
  "title": 'פוסט חדש',
  "description": 'המדריך הוא מידע והדרכה אודות הליך ההרשמה והמוסדות השונים להשכלה גבוהה עבור בוגרי החינוך החרדי. המדריך נכתב על ידי בוגרים ממגוון רחב של מוסדות, ומתעדכן באופן שוטף על ידי הבוגרים',
  "category": 'כללי',
  "date": '15/05/23',
  "avatar": 'Avatar',
  "username": 'שניאור שפרינצין',
  "content": 'המדריך הוא מידע והדרכה אודות הליך ההרשמה והמוסדות השונים להשכלה גבוהה עבור בוגרי החינוך החרדי. המדריך נכתב על ידי בוגרים ממגוון רחב של מוסדות, ומתעדכן באופן שוטף על ידי הבוגרים <h3>בדיקה</h3>.'
}

export default function PostPage({params}) {
  const {title, description, category, date, avatar, username, content} = data
const pathname = usePathname()
const router = useRouter()
const pagenav = [{id: 2, name: 'Projects', href: '/projects'},{id: 3, name: 'Flowbite', href: '/projects/flowbite'}]
  return (
    <div className='flex w-full p-4 justify-center align-middle  border-gray-500'>
      <div className='flex flex-col space-y-4 w-4/6'>
     {JSON.stringify(params)}
     {/* {JSON.stringify(router)} */}
     {JSON.stringify(pathname)}
     {console.log(pathname)}
<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
    <Link className=" flex align-middle items-center
      ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
      href="/">
<FaHome/>
         Home
         </Link>
    </li>

    {pagenav.map((item, index) => {
  return (
    <li class="inline-flex items-center">
      <Link className=" flex align-middle items-center
      ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
      href="/projects">
        <FaChevronLeft/>
         {/* {item.name} */}
         </Link>
    </li> 
  )
})}

<li aria-current="page">
      <div class="flex items-center">
      <FaChevronLeft color='gray' />
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Page</span>
      </div>
    </li>

  </ol>
</nav>
{JSON.stringify(pathname.split('/'))}

        <h2 className='text-2xl font-bold'>{title}</h2>
        
        <p className='text-lg'>{description}</p>
        <div className='flex justify-between w-full '>
          <div className='flex flex-col space-y-2 justify-around'>
            <p className='text-sm text-gray-500'>{category}</p>
            <p className='text-sm text-gray-500'>{date}</p>
          </div>
          <div className='flex flex-col items-end  space-y-2 justify-around'>
            <div className='w-10 h-10  border-b rounded-full bg-gray-200'>
            <UserAvatarMenu/>
            </div>
            <div className='text-sm text-gray-500'>{username}</div>
          </div>
        </div>
        <Separator/>
        <div className='w-full'>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}


