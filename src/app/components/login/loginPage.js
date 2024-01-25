"use client"
import { FaEnvelope, FaFacebook, FaGoogle } from 'react-icons/fa'
import Block from '../block/blockContainer'
import styles from './loginPage.module.css'
import React from 'react'
// import { signIn,signOut,useSession } from 'next-auth/react'
export default function LoginComponent() {
const status='unauthenticated'
    // const {data,status}=useSession()
if(status==='authenticated'){
    return <div>Authenticated

        
    </div>
}
if(status==='loading'){
    return <div>Loading
    </div>}
  return (
    <Block>
        <Block.Title>התחברות</Block.Title>
        <Block.Content className={styles.content}>

    <div className={styles.container}>
        <div className={styles.wrapper}>

        <div className={styles.box}>  
      <div className={styles.Row}>
        <h3>התחברות לאתר</h3>
        <div className={styles.content}>    

        <div className={styles.socialButton}>
    <FaGoogle/>
    להתחברות עם Google 
    </div>
<div className={styles.socialButton} onClick={
    ()=>{signIn('github')}
}>
<FaEnvelope/>
    התחברות באמצעות מייל 
</div>
<div className={styles.socialButton}>
<FaFacebook/>
    התחברות עם Facebook </div>


</div>

        </div>
      </div>
    
          </div>



{/* <div className={styles.socialButton} onClick={
    ()=>{signOut('github')}
}>Sign Out With GItHub</div> */}
{/* <div>{JSON.stringify(data,null,2)}</div> */}

    </div>   
</Block.Content>
    </Block>
  )
}
