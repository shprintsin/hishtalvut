import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { FaEnvelope, FaHeart, FaInfo } from "react-icons/fa";
import styles from "./WelcomeBlock.module.css";
import { Separator } from "@/components/ui/separator";
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

          <Card className="bg-transparent border-0">
    <CardHeader className="grid grid-cols-[1fr_15px] items-start gap-4 space-y-0 ">
    
      <div className="space-y-1">
        
      <div className={styles.heading}>
            <h2>{WelcomePage.title}</h2>
        </div>

        <CardTitle className="text-sm flex gap-3">
        </CardTitle>
        <CardDescription>        <input type="search" className={styles.search} placeholder="לחיפוש באתר" />
 {/* grid 3*2 */}
        </CardDescription>
      </div>
      <div className="flex items-center space-x-1 rounded-md bg-white text-secondary-foreground">
        
      </div>
    </CardHeader>
    <CardContent className={"border-t-2 py-4 border-b-white"}>
    <p className={"text-lg text-white"}>{WelcomePage.text}</p>
    </CardContent>
    <CardFooter className="border-b-2 border-b-white flex items-center justify-center">
            <div className="flex  space-x-4 items-center justify-center gap-3">
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
  
      </CardFooter>
  </Card>;
          
          
        {/* 
           

             */}
          </div>
          </div>

    </>
  );
}
