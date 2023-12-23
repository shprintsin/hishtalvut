import React from "react";

interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
}
export default function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <>
      <h1 className={`bg-[#1b436f] p-2 pl-4 w-fit text-light`} style={{ width: "fit-content" }}>
        {icon && <span className={"mx-3"}>{icon}</span>}
        <span className={"mx-2"}>{title}</span>
      </h1>
    </>
  );
}
