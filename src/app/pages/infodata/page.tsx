import { getInfoData } from '@/app/actions/fetch';

import { InfoBlock } from './InfoBlock';

const CustomStyles = `
.dataset_subtitle button{background:none;}
.dataset_subtitle{border-bottom:1px solid #a4a4a4;border-color:#a4a4a4 ;border-top:1px solid #a4a4a4;display:flex;font-family:heebo;font-weight:700;justify-content:space-between;margin:29px 0 0;padding:1rem 1rem 1rem 0;}
.homepage-search-data{background:#dfecf7;border-radius:3px;margin-top:34px;}
`
function InfoPage() {
  const block = {
    title: "title",
    background: "#e1ecf6",
    height: "650px"  };

  const {title, background, height, data} = block;
  return (<>
    
    <InfoBlock/>
   </>  )}

  export default InfoPage;
