import styles from './AboutBlock.module.css'
import {FaUser } from 'react-icons/fa'
import AboutComponent from './AboutComponent'
export default function AboutBlock({data}) {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      
        <h1 className={styles.title}>
           <FaUser/>
          מי אנחנו?
        </h1>
        <AboutComponent data={data} />  
    </div>
</div>
  )
}
