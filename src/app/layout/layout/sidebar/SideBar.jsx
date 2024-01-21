import styles from "./SideBar.module.css";
import Link from "next/link";
import {pages} from "@/pages";
export default function SideBar() {
  return (
    <>    
    <div className={styles.wrapper}>

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

              </div>
    </>
  );
}
