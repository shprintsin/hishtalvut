import { FaFileAlt, FaGraduationCap, FaHome, FaInfoCircle } from "react-icons/fa";
import {BsGraphUp} from "react-icons/bs";
export const pages = {
  WelcomeBlock: {
    // component:<><WelcomeBlock block={Structure.blocks.welcome}></WelcomeBlock>  </>,
    label: "בית",
    icon: <FaHome />,
    path: "/",
  },

Education:{
  // component: <TutorialBlock block={Structure.blocks.tutorials}/>,
  label: "המדריך להשכלה",
  icon: <FaGraduationCap />,
  path: "/pages/tutorial",
}
,
// Volenteer:{
//   // component: <ReportBlock block={Structure.blocks.reports}/>,
//   label: "פרסומים",
//   icon: <FaFileAlt />,
//   path: "/reports",
// },
Volenteer_2:{
  // component: <ChartBlock/>,
  label: "לוח נתונים",
  icon: <BsGraphUp />,
  path: "/pages/info",
},
// Volenteer_3:{
//   component: <TutorialBlock block={Structure.blocks.tutorials}/>,
//   label: "ספריה",
//   icon: <FaBook />,
//   path: "/tutorials",
// },
page5:{
  // component: <AboutBlock/>,
  label: "קצת עלינו",
  icon: <FaInfoCircle />,
  path: "/pages/about",
},
page6:{
  // component: <BlankBlock/>,
  label: "סקר מכינות",
  icon: "",
  path: "/pages/surveys/mechina",
},

};
