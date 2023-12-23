import {
  Col,
  Row,
} from 'react-bootstrap';
import { HiOutlineExternalLink } from 'react-icons/hi';

import InfoCard from './Cards';
import InfoChart from './Chart';
import { InfoDataProps } from './Props';

function InfoData({dataset}:{dataset:InfoDataProps}) {
const {title,subtitle,description,summary: summary,chart} = dataset;
    return (
      <>
        <Row className={""}>
          <Col className={" h-[560px]"}>
            <div className={"mb-10 border-b-3 border-b-white font-secular text-2xl bg-prime text-white p-3"}>
              {subtitle}
              <p className={"text-sm text-white-50"}>2022-2007</p>
            </div>
            <div className={"bg-[#cfdae5]"}>
            <div className={"dataset_subtitle justify-between flex"}>


            </div>
              <div className={" p-10 pt-3 shadow-amber-300  border-b-2 bg-[#cfdae5]"}>
                <InfoChart data={chart}></InfoChart>

              </div>
          </div>
          </Col>

          <Col md={4} className={"mx-5 "}>
            
            <Row className={""}>

            <div className={"bg-[#cfdae5] p-4 shadow-amber-300"}>
            <InfoCard InfoData={summary}></InfoCard>
              <small>
                <span>מקור:{description}</span>
                <a href={"#"} className={"text-decoration-none link-dark"}>
                  <HiOutlineExternalLink />
                </a>
              </small>

            </div>
            </Row>
          </Col>

        </Row>
      </>
    );
  }
  export default InfoData;
  