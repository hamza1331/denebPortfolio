import React from "react";
import { Container } from "react-bootstrap";
import image3 from "../../assets/images/app.jpg";
import ServiceCard from "./ServiceCard";

const title = `Mobile App Development`;
const text = `Think Solutionz offers complete range of mobile applications development services for both major platforms I.e. Android and iOS. With our satisfactory process, we offer our mobile application services irrespective of type or size of business. Either you’re a startup or well-established business, Team Think Solutionz will take care of your business value.
`;
export default function AppDevelopment() {
  return (
    <Container>
      <ServiceCard title={title} imageSrc={image3} text={text} />
    </Container>
  );
}
