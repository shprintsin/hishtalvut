
"use client"
import React from 'react'
import { Separator } from '@/components/ui/separator';
import { UserAvatarMenu } from './UserAvatarMenu';
import { FaChevronLeft, FaHome } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import getData from '@/app/utils/getData'

const data = {
  title: 'פוסט חדש',
  description: 'המדריך הוא מידע והדרכה אודות הליך ההרשמה והמוסדות השונים להשכלה גבוהה עבור בוגרי החינוך החרדי. המדריך נכתב על ידי בוגרים ממגוון רחב של מוסדות, ומתעדכן באופן שוטף על ידי הבוגרים',
  category: 'כללי',
  date: '15/05/23',
  avatar: 'Avatar',
  username: 'שניאור שפרינצין',
  content: 'המדריך הוא מידע והדרכה אודות הליך ההרשמה והמוסדות השונים להשכלה גבוהה עבור בוגרי החינוך החרדי. המדריך נכתב על ידי בוגרים ממגוון רחב של מוסדות, ומתעדכן באופן שוטף על ידי הבוגרים <h3>בדיקה</h3>.'
}

export default async function PostPage({params}) {
  // const tutorial = await getData("tutorials")
 
  return (
 <>
 F
 {/* {JSON.stringify(tutorial)} */}
 </>
  )
}


