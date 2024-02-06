import { FaFileAlt, FaGraduationCap, FaHome, FaInfoCircle } from "react-icons/fa";
import {BsGraphUp} from "react-icons/bs";
export const pages = {
  WelcomeBlock: {
    label: "בית",
    icon: <FaHome />,
    path: "/",
  },
Education:{
  label: "המדריך להשכלה",
  icon: <FaGraduationCap />,
  path: "/pages/tutorial",
}
,
Volenteer_2:{
  label: "לוח נתונים",
  icon: <BsGraphUp />,
  path: "/pages/info",
},
page5:{
  label: "קצת עלינו",
  icon: <FaInfoCircle />,
  path: "/pages/about",
},
page6:{
  label: "סקר מכינות",
  icon: "",
  path: "/pages/surveys/mechina",
},

};
