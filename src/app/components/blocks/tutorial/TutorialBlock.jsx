"use client"
import styles from "./Card.module.css"
import { FaGraduationCap } from "react-icons/fa";
import TutorialCard from "./TutorialCard";
export default function TutorialBlock({data}) {

  return (
    <>
   <div className={styles.container}>
        <div className={`${styles.wrapper} flex flex-col gap-5`}>
            <h1 className={styles.title}>
                <FaGraduationCap className={styles.icon} />
                המדריך להשכלה
            </h1>
            <div className={"flex flex-col align-middle items-center sm:flex-row w-11/12 gap-4  justify-between "}>
                {data.map((tutorial, index) => {
                    return (<div className="flex w-full sm:w-5/12 bg-[#e5e7eb]">
                        <TutorialCard data={tutorial} key={index} /></div>);
                })}
            </div>
        </div>
</div>
    </>
  );
}
