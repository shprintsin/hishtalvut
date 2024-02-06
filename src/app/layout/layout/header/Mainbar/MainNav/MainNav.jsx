import Link from 'next/link';
import styles from './MainNav.module.css';
import { FaHamburger, FaPlus, FaUser } from "react-icons/fa";
import React from 'react'
import Image from 'next/image';
import { IoMdMenu } from "react-icons/io";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CreateAccountCard } from './CreateAccountCard';
export default function MainNav({ MainMenuData}) {
  return (
    <>
    
    <nav className={`${styles.container}` }>  
    <div className={styles.navigation}>
    {MainMenuData.map((data, index) => {
      const { label, uri } = data;
      return (<Link key={index} className={styles.navLink} href={uri}>{label}</Link>);
    })}    
    </div>
    <div className={styles.login}>
    <Dialog>
  <DialogTrigger className={styles.loginLink}>
    <span><FaUser/></span>
    <span>התחברות</span></DialogTrigger>
    <DialogContent>
    <DialogHeader>
      {/* <DialogTitle>התחברות</DialogTitle> */}
      <DialogDescription>
<CreateAccountCard/>
  
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    
    </div>
</nav>

    </>
  );
}



