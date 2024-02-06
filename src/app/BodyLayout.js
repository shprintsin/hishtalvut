"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SideBar from "./layout/layout/sidebar/SideBar";
import AlertComp from "./layout/layout/Footer/alert/AlertComp";
import { FaUser } from "react-icons/fa";
import MainNav from "./layout/layout/header/Mainbar/MainNav/MainNav";
import { HiDotsVertical } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { IoMdExit, IoMdMenu } from "react-icons/io";

export function BodyLayout({ data, children }) {
  const [toggle, SetToggle] = useState(false);
  return (
    <div className="flex flex-col min-h-screen p-0 m-0">
      <main className="flex-grow">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <header className="flex items-center bg-prime sm:bg-blueprime h-20 border-b w-100 p-0 m-0">
              <nav className="flex justify-between  w-full h-full">
                <div className="flex justify-start  align-middle items-center sm:hidden p-3">
                  <AccordionTrigger>
                    <div onClick={() => SetToggle(!toggle)}>
                      {!toggle ? (
                        <IoMdMenu className="h-6 w-6 shrink-0 text-white text-xl" />
                      ) : (
                        <div className="h-6 w-6 shrink-0 text-white text-xl">
                          X
                        </div>
                      )}
                    </div>
                  </AccordionTrigger>
                </div>
                <div className="sm:bg-prime flex justify-center sm:w-1/5 sm:border-l-2 align-middle items-center">
                  <Link href={""}>
                    <Image
                      alt="logo"
                      src="/logo.png"
                      width="180"
                      height="140"
                    />
                  </Link>
                </div>
                <div className="hidden sm:flex sm:w-4/5">
                  <MainNav MainMenuData={data.MainMenu} />
                </div>
                <DropdownMenu className={"sm:hidden"}>
                  <div className="sm:hidden flex justify-end">
                    <DropdownMenuTrigger>
                      <div className="h-6 w-6 shrink-0 text-white text-xl">
                        <HiDotsVertical />
                      </div>
                    </DropdownMenuTrigger>
                  </div>
                  <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuGroup>
                      {data.MainMenu.map((item, index) => (
                        <DropdownMenuItem
                          className={"align-text justify-end"}
                          key={index}
                        >
                          <DropdownMenuItem className={"justify-end"}>
                            <Link
                              href={item.uri}
                              className=" flex justify-center align-middle gap-2 items-center  text-lg font-medium"
                            >
                              <span>{item.label}</span>
                              {/* Icob */}
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuItem className={"justify-end"}>
                        <Link
                          href="/login"
                          className="flex justify-center align-middle gap-2 items-center text-lg font-medium"
                        >
                          <span>התחברות</span>
                          <FaUser />
                        </Link>
                        
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
            </header>
            <AccordionContent>
              <div className="bg-deepblue flex flex-col gap-5 p-10 w-full">
                <SideBar className={""} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-row m-0 p-0">
          <div className="hidden sm:flex sm:w-1/5 gap-4 sm:flex-col p-5 sm:min-h-screen bg-deepblue border-l-white border-l-2">
            <SideBar />
          </div>
          <div className="flex w-full sm:w-4/5 min-h-screen">{children}</div>
        </div>
      </main>

      <AlertComp />
    </div>
  );
}
