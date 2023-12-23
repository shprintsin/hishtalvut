import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

import Heading from '../components/Heading';
import { TutorialProps } from '../props';
import GetTutorialPosts from './TutorialGet';

// the card for each tutorial
export const TutorialCard = ({ tutorial }: {
  tutorial: TutorialProps }) => {
    const { name, uri, count, description, articles, icon, slug } = tutorial;
    return (

      <div className={"h-auto bg-gray-300 w-5/12 items-stretch  mx-10"}>
            <div className=" text-white ">

                <Heading name={name} icon={icon} uri={uri} count={count} />
            </div>
            <div className="p-4 px-4  ">
              <div>
                <h2 className={"font-bold font-heebo text-2xl"}>הצעד הראשון להשכלה גבוהה</h2>
              </div>
                <div className="text-heeno text-black   ">
                    <p className={"leading-8 pb-2 text-xl font-heebo text-gray-700 border-b border-b-gray-400"}>{description}</p>
                    <h5 className={"text-heebo decoration-2 decoration-black"}>תוכן עניינים:</h5>
                </div>

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
                  <div className={"flex justify-end"}>
                    <Link className={"flex justify-items-start hover:bg-gray-400 hover:bg-gray-500 p-1 transition  duration-300 ease-in-out text-sm bg-gray-700 flex text-white border-2 w-fit p-2 text-decoration-none"} href={"/#"}>
                    <span><FaPlus className={"text-xl ml-2 text-heeno"}/> </span>
                    <span className={""}>לראות עוד</span>
                    </Link>
                  </div>

                </div></div>
            </div>
    );
};

export default TutorialCard;
  