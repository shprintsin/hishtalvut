import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

interface VerticalPostTextProps {
  title: string;
  subtitle: string;
  image: string;
  uri: string;
}

export function VerticalPostText({report }:{report: VerticalPostTextProps}) {
    const {title, subtitle, image, uri} = report;
  return (
    <Container className="p-2">
      <Row className="p-0 pb-0 inline-block">
        <Col className="flex flex-col space-y-1" md={9}>
          <div className="w-5/6">
            <img alt={title} src={image} />
          </div>
          <a href={uri} className="link-border font-semibold text-3xl text-black decoration-gray-500">
            {title}
          </a>
          <span className="text-gray-700 font-bold">{subtitle}</span>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
};