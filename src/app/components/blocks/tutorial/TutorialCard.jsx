"use client"
import Link from "next/link";
import Heading from "./heading/Heading";
import { FaPlus } from "react-icons/fa";
import { usePathname } from "next/navigation";

// the card for each tutorial
const TutorialCard = ({ data, className }) => {
  const { title, slug, id, description, items } = data;
  const pathname = usePathname()
  return (
    <div className="flex flex-col ">
      <Heading name={title} icon={<FaPlus></FaPlus>} uri={"uri"} count={4} />
      <div className="p-4 px-4">
        <h2 className={"font-bold font-heebo text-2xl"}>{title}</h2>
        <p className={"leading-8 pb-2 font-heebo text-gray-700 border-b border-b-gray-400"}>
            {description}</p>
        <h5 className={"pt-4 text-heebo decoration-2 decoration-black"}>
          תוכן עניינים:
        </h5>
        <div className={"pt-3 px-3 "}>
          <ul className={"custom-bullet"}>
            {/*ArticleList*/}
            {items.map(({ slug, id, name }) => {
              return (
                <>
                  <li key={id} className={"m-1"}>
                    <Link
                      className={"hover-gray flex text-sky-700 mb-4 text-decoration-none"}
                      href={`${pathname}/${slug}`}
                      >
                      {" "}
                      -<span className={"mx-2"}>{name}</span>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <div className={"flex justify-end pt-4"}>
            <Link
              className={"flex justify-items-start hover:bg-gray-400 hover:bg-gray-500 p-1 transition  duration-300 ease-in-out text-sm bg-gray-700 flex text-white border-2 w-fit p-2 text-decoration-none"
            } href={`/tutorial/${data.slug}/${slug}`}>
              <span>
                <FaPlus className={"text-xl ml-2 text-heeno"} />{" "}
              </span>
              <span className={""}>לראות עוד</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
