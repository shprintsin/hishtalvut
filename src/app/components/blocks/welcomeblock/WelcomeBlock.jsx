import { FaEnvelope, FaHeart, FaInfo } from "react-icons/fa";
import styles from "./WelcomeBlock.module.css";
export const WelcomePage ={
  title: 'ברוכים הבאים לפורום להשתלבות',
  text: '                הפורום להשתלבות היא יוזמה של יוצאי החברה החרדית לטובת עידוד וקידום השתלבות צעירים מהחברה החרדית בהשכלה איכותית על ידי יצירת מוסדות שיאפשרו השתלבות איכותית ושוויונית לכלל בוגרי החינוך החרדי לאורך זמן.    '
}
{/* <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
  <div className={styles.headingWrapper}>
    <div className={styles.svg}><img src="./student.svg" className={styles.image} /></div>
    <div className={styles.content}>
    </div>
    
  </div>
</div>

</div> */}
export default function WelcomeBlock() {
  return (
    <>
    {/* container
    wrapper
    heading
    title search box content links  */}
      <div className={styles.container}>
        <div className={styles.wrapper}>

      <div className={styles.heading}>
            <h2>{WelcomePage.title}</h2>
        </div>
          <input type="search" className={styles.search} placeholder="לחיפוש באתר" />
            <div className={styles.box}>
              
              <p className={styles.content}>{WelcomePage.text}</p>
              <div className={styles.links}>
                <a href="#">
                  <h2>
                    <FaEnvelope />
                    קצת עלינו
                  </h2>
                </a>
                <a href="#">
                  <h2>
                    <FaHeart /> תרומה
                  </h2>
                </a>
                <a href="#">
                  <h2>
                    <FaInfo />
                    יצירת קשר
                  </h2>
                </a>
              </div>
            </div>
        {/* 
           

             */}
          </div>
          </div>

    </>
  );
}
