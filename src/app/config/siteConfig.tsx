import {
  FaBook,
  FaFacebook,
  FaFileAlt,
  FaHome,
  FaInfoCircle,
  FaSchool,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

export const icons = {
  'faSchool': <FaHome />,
  'faFilealt': <FaFileAlt/>,
  'faBook': <FaBook />,
  'faInfoCircle': <FaInfoCircle />,
  'faHome': <FaHome />,
  'faTwitter': <FaTwitter />,
  'faFacebook': <FaFacebook />,
  'faWhatsapp': <FaWhatsapp />,
};
export const SiteConfig = {
    title:"הפורום להשתלבות",
    url:"http://localhost:3000",
    description:"",
    logo:"/logo.png",  
    pages: {
      home:{title: 'בית', path: '/', icon: <FaHome />},
      tutorial:{title: 'מדריך', path: '/pages/tutorials', icon: <FaSchool />},
      reports:{title: 'פרסומים', path: '/pages/reports', icon: <FaFileAlt />},
      library:{title: 'ספריה', path: '/pages/library', icon: <FaBook />},
      infodata:{title: 'נתונים', path: '/pages/infodata', icon: <FaInfoCircle />},
},
    header:{
        navigation:[
        { label: 'Home', uri: '/', order: 1 },
        { label: 'About', uri: '/about', order: 2 },
        { label: 'Contact', uri: '/contact', order: 3 },
      ]},
     
footer:{
    social:[ {title:"Twitter", uri:"#",icon: <FaTwitter size={"2rem"} />},
    {title:"Linkedin",uri:"#",icon: <FaFacebook size={"2rem"} />},
    {title:"Whatsapp",uri:"#",icon: <FaWhatsapp size={"2rem"} />}],
    pages: [
    { title: "Group One", items: [{ title: "L1", uri: "#1" },{ title: "L2", uri: "#2" }]},
    { title: "Resources", items: [{ title: "Link3", uri: "#1" },{ title: "Link4", uri: "#2" }]},
    { title: "Resources", items: [{ title: "Link3", uri: "#1" },{ title: "Link4", uri: "#2" },{ title: "Link4", uri: "#2" },{ title: "Link4", uri: "#2" }]},
  ],
},
labels: {
    return_home: 'חזור לדף הבית',
}
}