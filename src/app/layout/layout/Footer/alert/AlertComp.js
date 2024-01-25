"use client"
import React from 'react'
import styles from './AlertComp.module.css'
import {useState} from 'react'
import { Button } from '@/components/ui/button'
export default function AlertComp() {
    const [Alert,setAlert]=useState(true) 
  return (
<>
{Alert && 
<footer className="flex justify-between items-center bg-gray-200 h-8 fixed bottom-0 w-full">
<div className={styles.alert}>
    <p>האתר בשלבי פיתוח, חלק מהפונקציות לא עובדות כעת, בשלב זה, האתר הוא לצורך הדמיה</p>
<Button onClick={() => setAlert(!Alert)}>X  סגירה</Button>
    </div>
    </footer>}
</>   


)
}
