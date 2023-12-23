import Link from 'next/link';

import { SiteConfig } from '@/app/config/siteConfig';

import MainNav from './Mainbar/MainNav';

function SiteHeader() {
  const {title,logo,header,url} = SiteConfig
  return (
      <header >
        <div className='sticky' style={{ position: 'sticky', top: 0 }}>
            <MainNav Nav={header.navigation} >
            <Link href={url} className={`navbar-brand`}>
        <img
          alt={title}
          src={logo}
          width={"180"}
          height="auto"
          className="d-inline-block align-top"
        />
      </Link>

            </MainNav>
          </div>
          </header>
  )
}

export default SiteHeader
