import Link from 'next/link';
import styles from './MainNav.module.css';
import { FaUser } from "react-icons/fa";
import React from 'react'
import Image from 'next/image';

export default function MainNav({ MainMenuData}) {
  return (
    <>

    <nav className={styles.container}>  
    <Link className={styles.logo} href={"/"}><Image
          alt={"logo"}
          src="/logo.png"
          width="150"
          height="200"
          className=""
        /></Link>
    <div className={styles.navigation}>
    {MainMenuData.map((data, index) => {
      const { label, uri } = data;
      return (<Link key={index} className={styles.navLink} href={uri}>{label}</Link>);
    })}    </div>
    <div className={styles.login}>
    <Link href={"/login"} className={styles.loginLink}>
      <span><FaUser/></span>
      <span>התחברות</span>
      </Link>
    </div>
</nav>

    </>
  );
}

