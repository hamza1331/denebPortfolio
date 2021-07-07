import React from "react";
import { Container } from "react-bootstrap";
import image1 from "../../assets/images/business.jpg";
import ServiceCard from "./ServiceCard";
const title = `Graphic Design`;
const text = `We believe Design comes as a core of what we do @ThinkSolutionz. We begin with ideation, sketch and illustration to deliver high quality design, bespoke typography and artwork. As we put our effort and find our inspirations from culture and idea behind the design, the outcome is creative, accurate and natural.`;
export default function GraphicDesign() {
  return (
    <Container>
      <ServiceCard title={title} imageSrc={image1} text={text} />
    </Container>
  );
}
