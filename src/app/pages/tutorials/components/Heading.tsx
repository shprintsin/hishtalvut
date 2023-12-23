import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import { LABELS } from '@/app/components/blocks/pageComponents';

import { Badge } from './Badge';

export function Heading({ name,count,icon,uri }: { name: string,count:number,icon:string,uri:string }) {
  return (
    <>
       <Link className={"text-prime text-decoration-none"} href={uri}>
          <div className="text-white text-lg p-3  bg-[#5b7895]">
          {/*title of the section*/}
          <div className={"flex justify-between"}>
          <span className="text-white font-bold font text-xl text-decoration-none ">{name}</span>
        {/*badge icon*/}
            <span className="text-6xl mr-2.5 inline-block mx-2">
      <i className={icon}></i>
    </span>
            {/*end badge icon*/}
        <Badge text={`${count}  ${LABELS.ARTICLES}`} icon={<FaBars></FaBars>}/>
        </div>
          </div>

      </Link>

    </>
  );
}

export default Heading;
