import React from "react";
import { Container } from "react-bootstrap";
import image3 from "../../assets/images/digital.jpg";
import ServiceCard from "./ServiceCard";

const title = `Video Editing`;
const text = `We put life into brands by creating videos and animations that makes your business moving. Our creative experts strive to deliver the message of your brand and its core values.`;
export default function VideoEditing() {
  return (
    <Container>
      <ServiceCard title={title} imageSrc={image3} text={text} />
    </Container>
  );
}
