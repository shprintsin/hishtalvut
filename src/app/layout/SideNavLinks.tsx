import Link from 'next/link';

import { SiteConfig } from '../config/siteConfig';

function SideNavLinks() {
  const pages = SiteConfig.pages;
   return (
  <>
          {Object.values(pages).map((page,index) => {
          const { path, title, icon } = page;
            return(
          <Link href={path}
          key={index}
          title={title}
          className='flex items-center justify-start text-decoration-none text-white hover:bg-gray-700 hover:text-gray-300 p-3 rounded-md transition duration-300 ease-in-out text-lg font-semibold'
        >
          {icon && <div className='pl-4'>{icon}</div>}
          {title}
        </Link>
          
            
        )})}
        </>
  
)}

export default SideNavLinks;