import React from "react";
import { Container } from "react-bootstrap";
import image3 from "../../assets/images/woman2.jpg";
import ServiceCard from "./ServiceCard";

const title = `UI/UX Design`;
const text = ` 
We strive to comprehend the challenges that the industry is facing today and use our strong business acumen to build exclusive and unprecedented solutions for them. Our mission is to bring best quality in the innovative techniques that are designed by our tech-experts.  

`;
export default function UiUx() {
  return (
    <Container>
      <ServiceCard title={title} imageSrc={image3} text={text} />
    </Container>
  );
}
