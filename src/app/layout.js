import "./globals.css";
import getData from "./utils/getData";
import { Inter } from 'next/font/google'
 import { Secular_One } from "next/font/google";
import { BodyLayout } from "./BodyLayout";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 
const font = Secular_One({ subsets: ['latin'] ,
weight: '400',})
export default async function RootLayout({ children }) {
  
  const data = await getData("layout")
  return (
    <html lang="he" dir="rtl">
      <head>
 <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"></link> 
        <title>הפורום להשתלבות</title>
   
      </head>
      <body >
        <BodyLayout data={data}>{children}</BodyLayout>
     
        </body>
    </html>
  );
}

