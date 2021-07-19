import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import image1 from "../../assets/images/portfolio/web1.jpg";
import image2 from "../../assets/images/portfolio/web2.jpg";
import image3 from "../../assets/images/portfolio/web3.jpg";
import WebDesignCard from "./WebDesignCard";
const CardDetails = [
  {
    id: "1",
    imageSrc: image1,
    title: `Myers Website`,
    text: `Development`,
  },
  {
    id: "2",
    imageSrc: image2,
    title: `Grocery Supermarket Website`,
    text: `Development`,
  },
  {
    id: "3",
    imageSrc: image3,
    title: `Mechfinder Website`,
    text: `Development`,
  },
];
export default function WebDevelopment() {
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
