
import { BreadCrumb } from "./BreadCrumb";
import React from "react";
import { Separator } from "@/components/ui/separator";
import UserAvatarMenu from "./UserAvatarMenu";

const data = {
  title: "פוסט חדש",
  description:
  "המדריך הוא מידע והדרכה אודות הליך ההרשמה והמוסדות השונים להשכלה גבוהה עבור בוגרי החינוך החרדי. המדריך נכתב על ידי בוגרים ממגוון רחב של מוסדות, ומתעדכן באופן שוטף על ידי הבוגרים",
  category: "כללי",
  date: "15/05/23",
  avatar: "Avatar",
  username: "שניאור שפרינצין",
  content:
    "המדריך הוא מידע והדרכה אודות הליך ההרשמה והמוסדות השונים להשכלה גבוהה עבור בוגרי החינוך החרדי. המדריך נכתב על ידי בוגרים ממגוון רחב של מוסדות, ומתעדכן באופן שוטף על ידי הבוגרים <h3>בדיקה</h3>.",
};

export default function PostPage({ params }) {
  const { title, description, category, date, avatar, username, content } =
    data;

  const pagenav = [
    { id: 2, name: "Projects", href: "/projects" },
    { id: 3, name: "Flowbite", href: "/projects/flowbite" },
  ];
  return (
    <div className="flex w-full p-4 justify-center align-middle  border-gray-500">
      <div className="flex flex-col space-y-4 w-4/6">
{JSON.stringify(params)}
        <BreadCrumb pagenav={pagenav} />
       {/* BreadCrumb */}
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
        <div className="flex justify-between w-full ">
          <div className="flex flex-col space-y-2 justify-around">
            <p className="text-sm text-gray-500">{category}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <div className="flex flex-col items-end  space-y-2 justify-around">
            <div className="w-10 h-10  border-b rounded-full bg-gray-200">
              {/* <UserAvatarMenu/> */}
            </div>
            <div className="text-sm text-gray-500">{username}</div>
          </div>
        </div>
        <Separator />
        <div className="w-full">

          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
