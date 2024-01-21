import AlertComp from "./Footer/alert/AlertComp";
import MainNav from "./header/Mainbar/MainNav/MainNav";
// import styles from './Layout.module.css'
import styles from './mobile.module.css'
import SideBar from "./sidebar/SideBar";
import { useState } from "react";
    export default function Layout({children}) {
    return(
    <>
     <div className={styles.container}>
              <div className={styles.navbar}>
              {/* <div className={styles.logo}><GetLogo/></div> */}
              <div className={styles.navigation}>
             <MainNav/>
              </div>
              </div>      
              <div className={styles.body}>
              <div className={styles.sidebar}><SideBar/></div>
                <div className={styles.block}>
                {children}
                </div>
             
                </div>
        <AlertComp/>
      </div> 
    </>
    )}


