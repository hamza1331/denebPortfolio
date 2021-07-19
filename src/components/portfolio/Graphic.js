import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import image1 from "../../assets/images/portfolio/graphic1.jpg";
import image2 from "../../assets/images/portfolio/graphic2.jpg";
import image3 from "../../assets/images/portfolio/graphic3.jpg";
import WebDesignCard from "./WebDesignCard";
const CardDetails = [
  {
    id: "1",
    imageSrc: image1,
    title: `Travelling Brouchure `,
    text: `Graphics`,
  },
  {
    id: "2",
    imageSrc: image2,
    title: `Raybin Brouchure`,
    text: `Graphics`,
  },
  {
    id: "3",
    imageSrc: image3,
    title: `Booklet Design`,
    text: `Graphics`,
  },
];
export default function Graphic() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        {CardDetails.map((card) => (
          <Col className="col-12 col-md-6 col-lg-4 my-3" key={card.id}>
            <WebDesignCard
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.text}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
