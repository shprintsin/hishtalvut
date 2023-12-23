import { SiteConfig } from '@/app/config/siteConfig';

export function FooterLinks() {
const {social,pages} = SiteConfig.footer
  return (
        <>
<div className={"flex justify-between column-4"}>
{pages.map((group, index) => (
    <>
    <div key={index}>
    <h2>{group.title}</h2>
      <ul className="list-unstyled" key={index}>
      {group.items.map((child, index) => {
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
{/* Social Links */}

    <ul className={"px-5"}>
    {social.map((item, index) => {
        const {title,uri,icon}=item;
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


