'use client'
import { usePathname } from 'next/navigation';

import SideNavLinks from './SideNavLinks';

function SideNav() {
    const pathname = usePathname()
    const isHome = pathname === '/'
  return (
    <div className='bg-[rgb(31,41,55)] p-6 pt-1 space-y-2'>
      {/* {!isHome && (
                <Link
                  href="/"
                  className="flex text-white inline-block bg-gray-800 px-2 py-1 text-sm "
                  title={'בית'}
                >
                  <FaArrowRight />
                  <span className="text-gray-300">{SiteConfig.labels.return_home}</span>
                </Link>
)} */}
      <div className='pt-4'>
        <SideNavLinks />
      </div>
    </div>
  );
}

export default SideNav;
