import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

export const HorizontalPostImage = ({ report }) => {
  const {title, subtitle, description, uri, image, tag} = report;
  return (
    <Container className="bg-gray-700 p-2">         
      <Row className={"p-0 pb-0 inline-block"}>
        <div className={"col-md-3"}><img alt="" className="zoomOnHover img-fluid w-100 pb-2" src={image} /></div>
        <Col className={"flex flex-col space-y-1"} md={9}>

          <a href={"/"}
            className={`
       link-border font-semibold text-3xl
        text-white
       `}>{title}</a>
          <span className="
    text-gray-300
    font-bold
     text-xl
    ">{subtitle}</span>
          <Row>
            <p className="
text-gray-100
      p-3
      pb-0
      leading-7">{description}</p>
          </Row>

        </Col>
      </Row>
    </Container>
  );
};
