import {
  Col,
  Row,
} from 'react-bootstrap';
import {
  FaArrowLeft,
  FaGithub,
} from 'react-icons/fa';

import HomeBlock from '@/app/components/HomeBlock';
import { SiteConfig } from '@/app/config/siteConfig';
import { siteMetadata } from '@/app/data/siteMetadata';

import { ReportBlock } from './ReportBlock';

function ReportPage() {
  const block = {
    title: SiteConfig.pages.reports.title,
    background: "#e1ecf6",
    height: "650px"
  };

  const { title, background, height } = block;
  return (
    <>
      <HomeBlock title={title} background={"#e1ecf6"} height={height}>
        <Row>
        <ReportBlock/>
        </Row>
        <Row></Row>
        <Row className={"pt-5"}>
          <Col>
            {siteMetadata.gitHubURL && (
              <div className="w-fit flex text-gray-500 pl-5 font-heebo font-medium">
              <span className={"px-2"}>
                <FaGithub />
              </span>
              <span>
                <a
                  href={siteMetadata.gitHubURL}
                  className="text-gray-500 pl-5 font-heebo font-medium"
                >לגיטהאב שלנו
                </a>
              </span>
            </div>

)}
          </Col>
          <Col>
            <div className={ "flex justify-end px-10 text-black text-2xl font-heebo font-medium" }>
              <a className={`text-black text-2xl font-heebo font-medium`} href={"/"}>
                לספריית המאמרים המלאה
              </a>
              <span>
                <FaArrowLeft />
              </span>
            </div>
          </Col>
        </Row>
      </HomeBlock>
    </>
  );
}

export default ReportPage;
