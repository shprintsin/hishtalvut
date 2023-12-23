import {
  Col,
  Row,
} from 'react-bootstrap';

import { InfoData } from './Props';

export default function InfoCard({InfoData}:{InfoData:InfoData['summary']}) {
    return(
    <>
  <>
            {/*<h5 className={"bg-title2"}>תקציר</h5>*/}

            <ul className={""}>
                {InfoData.map((lines, index) => (
                    <li key={index}>
                        <Row>
                            <Col>
                                <Row className={"p-1 border-b border-b-gray-400"}>
                                    <Row className={"infoList-item-title"}>{lines.title}</Row>
                                    <Row className={"infoList-item-data"}>{lines.subtitle}</Row>
                                  
                                </Row>
                            </Col>
                        </Row>
                    </li>
                ))}
            </ul>
        </>

    </>
    )}