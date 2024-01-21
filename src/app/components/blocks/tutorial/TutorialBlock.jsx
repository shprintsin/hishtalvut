"use client"
import styles from "./Card.module.css"
import { FaGraduationCap } from "react-icons/fa";
import TutorialCard from "./TutorialCard";
export default function TutorialBlock({data}) {

  return (
    <>
   <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                <FaGraduationCap className={styles.icon} />
                המדריך להשכלה
            </h1>
            <div className={styles.content}>
                {/* {JSON.stringify(data.content)} */}
                
                {data.content.map((tutorial, index) => {
                    return (
                    <>
                        <TutorialCard
                            className={styles.Card}
                            key={index}
                            tutorial={tutorial}
                        />
                    </>
                    );
                })}
            </div>
        </div>
</div>
    </>
  );
}
