import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

const SocialLinks=[
  {label:"Twitter", uri:"#",icon: <FaTwitter size={"2rem"} />},
  {label:"Whatsapp",uri:"#",icon: <FaWhatsapp size={"2rem"} />},
  {label:"Linkedin",uri:"#",icon: <FaFacebook size={"2rem"} />},
]
export function FooterLinks({Links}) {
  
    return (
        <>
<div className={"flex justify-between column-4"}>
{Links.map((group, index) => (
    <>
    <div key={index}>
    <h2>{group.title}</h2>
      <ul className="list-unstyled" key={index}>
      {group.children.map((child, index) => {
            const {uri,title} = child;
            return(
          <li key={index}>
              <a className="light-link" href={uri}>
               {title}
              </a>

          </li>
        )
            }
        )}
      </ul>
      </div>
    </>
  ))}

    <ul className={"px-5"}>
    {SocialLinks.map((item, index) => {
        const {uri,icon}=item;
        return(
        <li key={index} className={"pb-4"}>
          <a className={"white-link"} href={uri}>
            {icon}
          </a>
        </li>
      )})}
    </ul>
</div>



        </>
    );
}


