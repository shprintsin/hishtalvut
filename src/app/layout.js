import "./globals.css";
import AlertComp from "./layout/layout/Footer/alert/AlertComp";
import MainNav from "./layout/layout/header/Mainbar/MainNav/MainNav";
import SideBar from "./layout/layout/sidebar/SideBar";
import styles from "./layout/layout/Layout.module.css";
import getData from "./utils/getData";



export default async function RootLayout({ children }) {
  const data = await getData("layout")
  return (
    <html lang="he" dir="rtl">
      <head>
        <title>הפורום להשתלבות</title>
      </head>
      <body >
      <div className={styles.container}>
              <div className={styles.navbar}>
              {/* <div className={styles.logo}><GetLogo/></div> */}
              <div className={styles.navigation}>
              <MainNav MainMenuData={data.MainMenu} />
              </div>
              </div>      
              <div className={styles.body}>
              <div className={styles.sidebar}>
              <SideBar/>
                </div>
                <div className={styles.block}>
                {children}
                </div>
                </div>
<AlertComp/>
                
      </div> 
        </body>
    </html>
  );
}
