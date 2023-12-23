import Link from 'next/link';
import { NavItem } from 'react-bootstrap';

import { BarItemsProps } from '../HeaderProps';

export default function MainBarItems({items}:BarItemsProps) {
    return(
    <>
       {items.map((data, index) => {
          const { label, uri } = data;
          return (
            <NavItem key={index} className={" hvr-underline-from-center text-white"}>
              <Link className="nav-link text-white" href={uri}>{label}</Link>
            </NavItem>
          );
        })} 
    </>
    )}