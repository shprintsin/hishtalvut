"use client"
import React from "react";
import { FaChevronLeft, FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pagenav = [[{ id: 2, name: "Projects", href: "/projects" }, { id: 3, name: "Flowbite", href: "/projects/flowbite" }]];
export function BreadCrumb({ pagenav,title }) {
  const pathname = usePathname()
  return (
    <>
    {JSON.stringify(pathname)}
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"><li class="inline-flex items-center"><Link className={"flex align-middle items-center ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"} href="/"><FaHome />Home </Link> </li>
          {pagenav.map((item, index) => {
            return (
              <li key={index} class="inline-flex items-center"> <Link className={"flex align-middle items-center ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"} href="/projects" > <FaChevronLeft /> {item.name} </Link> </li>
            );
          })}
          <li aria-current="page"> <div class="flex items-center"> <FaChevronLeft color="gray" /> <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{title}</span> </div>
          </li>
        </ol>
      </nav>
    </>
  );
}
