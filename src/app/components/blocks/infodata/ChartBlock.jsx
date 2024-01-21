"use client"
import { useState,useEffect } from 'react';
import { UseInfoData } from './UseInfoData';
import styles from './ChartBlock.module.css'
import InfoCard from './InfoCard';
import InfoChart from './infoChart';
import Select from 'react-select';
import { FaMinus, FaPlus, FaSave } from 'react-icons/fa';
import getData from '@/app/utils/getData';


function ChartBlock() {
  const [data, setData] = useState(null);
  const [selected,SetSelected] = useState(null);
  const [isLoading,SetisLoading] = useState(true);
  const [toggleCard, settoggleCard] = useState(true);
  useEffect(() => {
      (async () => {
          try {
              const res = await fetch("https://hishtalvut-api.vercel.app/api/main/info");
              const jsonData = await res.json();
              setData(jsonData);
              SetisLoading(false)
              SetSelected(jsonData.infodata.data[0])
          } catch (err) {
              console.error(err);
          }
      })();
  }, []);
  const chart =data?.infodata?.data

if (isLoading) {return <div>Loading...</div>;}
const options = chart.map(item => ({ label: item.title, value: item.id }));

  return (
    <>
<div className={styles.container}>
  <div className={styles.wrapper}>
    <div className={styles.title}>מאגר הנתונים</div>
<div className={styles.selection}>
    <Select className={styles.input} options={options} onChange={(e)=>SetSelected(chart.find((item)=>item.id==e.value))}
    placeholder={"בחירת נתונים מתוך מאגר הנתונים:"}
    />
</div>
{/* {JSON.stringify(data.infodata.data)} */}
    <div className={styles.CardContainer}>
      <div className={styles.CardWrapper}>
          <div className={styles.subtitle}>
            {selected && selected.title}
          <p>{selected && selected.subtitle}
          </p>
        </div>
      <div className={styles.chart}>
        <div className={styles.buttons}>

            <button className={styles.button} onClick={()=>settoggleCard(!toggleCard)}>
            {toggleCard ? <FaPlus/> : <FaMinus/>}
          </button>
          <button className={styles.button} onClick={()=>settoggleCard(!toggleCard)}>
            <FaSave/>
          </button>
        </div>
          {/* {selected && selected.title} */}
          <div className={styles.chartWrapper}>

      {selected && <InfoChart key={toggleCard} data={selected.chart}/>}
          </div>
        </div>
        </div>
      {selected && <InfoCard data={selected.summary} toggleCard={toggleCard} source={selected.source}/>}


    </div>  
  </div>
</div>
    </>
  );
}

export default ChartBlock;