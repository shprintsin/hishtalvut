import Link from 'next/link';
import Heading from './heading/Heading';
import GetTutorialPosts from './TutorialGet';
import {FaPlus} from "react-icons/fa";

// the card for each tutorial
const TutorialCard = ({ tutorial,className}) => {
    const { name, uri, count, description, articles, icon, slug } = tutorial;
    return (

        <div className={`${className}`}>
                <Heading name={name} icon={icon} uri={uri} count={count} />
            <div className="p-4 px-4  ">
                <h2 className={"font-bold font-heebo text-2xl"}>הצעד הראשון להשכלה גבוהה</h2>
                    <p className={"leading-8 pb-2 font-heebo text-gray-700 border-b border-b-gray-400"}>
                        אז, איך בעצם מתחילים ללמוד?</p>
                    <h5 className={"pt-4 text-heebo decoration-2 decoration-black"}>תוכן עניינים:</h5>
                <div className={"pt-3 px-3 "}>
                    <GetTutorialPosts
                        articles={articles}
                        count={count}
                        uri={uri}
                        name={name}
                        description={description}
                        icon={icon}
                        slug={slug}
                    />
                  <div className={"flex justify-end pt-4"}>
                    <Link className={"flex justify-items-start hover:bg-gray-400 hover:bg-gray-500 p-1 transition  duration-300 ease-in-out text-sm bg-gray-700 flex text-white border-2 w-fit p-2 text-decoration-none"} href={"/#"}>
                    <span><FaPlus className={"text-xl ml-2 text-heeno"}/> </span>
                    <span className={""}>לראות עוד</span>
                    </Link>
                  </div>
                </div>
            </div>

        </div>
    );
};

export default TutorialCard;
  