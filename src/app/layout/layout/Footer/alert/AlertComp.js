"use client"
import React from 'react'
import styles from './AlertComp.module.css'
import {useState} from 'react'
export default function AlertComp() {
    const [Alert,setAlert]=useState(true) 
  return (
<>
{Alert && <div className={styles.alert}>
    <button onClick={() => setAlert(!Alert)}>X</button>
    <p>האתר בשלבי פיתוח, חלק מהפונקציות לא עובדות כעת, בשלב זה, האתר הוא לצורך הדמיה</p>
    <div></div>
    </div>}
</>   


)
}
