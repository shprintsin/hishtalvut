import styles from './AboutBlock.module.css'

import { MemberComponent } from './MemberComponent';

export default function AboutComponent({data}) {
  return (
    <div className={styles.box}>  
      <div className={styles.Row}>
        <h3>{data.about.title}</h3>
        <div className={styles.content}>    
          <p>{data.about.content}</p>
        </div>
      </div>
      {data.about.rows.map((row) => (
        <div key={row.id} className={styles.Row}>
          <h3>{row.title}</h3>
          <div className={styles.members}>
            {row.members.map((member) => {
              return (<MemberComponent key={member.id} className={styles.Card} {...member}/>);
            })}
          </div>
        </div>
      ))}
    </div>
  )
}