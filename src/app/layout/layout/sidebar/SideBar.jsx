"use client"
import styles from "./SideBar.module.css";
import Link from "next/link";
import {pages} from "@/pages";
import { useState } from "react";

export default function SideBar({className}) {
  const [toggle,setToggle]=useState(true)
  const ToggleHandler =()=>setToggle(!toggle)
  return (
    <>   
{Object.values(pages).map(
  ({ label, icon, path,index }) => (        
    <Link
    key={index}
    href={path}
    title={label}
    // onClick={() => { setPageName(Name);
    className={styles.link}
    >
      
     {icon && <div className="pl-4">{icon}</div>}
     {label}
   </Link>
   )
   )}

  
    </>
  );
}
