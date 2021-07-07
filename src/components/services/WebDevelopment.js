import React from "react";
import { Container } from "react-bootstrap";
import image1 from "../../assets/images/webDevelopment.jpg";
import ServiceCard from "./ServiceCard";

const title = `Web Application Development`;
const text = ` We design and develop completely responsive static and dynamic websites for your custom needs that help you attract your target customers and convert them into potential sales either you’re offering a product or services. Team Think Solutionz always foresee the excellence in your satisfaction`;
export default function WebDevelopment() {
  return (
    <Container>
      <ServiceCard title={title} imageSrc={image1} text={text} />
    </Container>
  );
}
