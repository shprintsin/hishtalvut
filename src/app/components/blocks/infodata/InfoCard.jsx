import { Row, Col } from "react-bootstrap";
import styles from "./ChartBlock.module.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useState } from "react";
    export default function InfoCard({data,source,toggleCard}) {
    return(
    <>
  <>
  <div className={`${styles.info} ${!toggleCard && "hidden"}`}>
        <div className={styles.card}>
                      <h5 className={"bg-title2"}>תקציר</h5>

            <ul className={""}>
                {data.map((lines, index) => (
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
            {/* <span>מקור:{source.name}</span> */}
            <a href={"#"} className={styles.link}><HiOutlineExternalLink /></a>
        </div>
      </div>
        </>

    </>
    )}