import React from "react";
import { Container } from "react-bootstrap";
// import image3 from "../../assets/images/car2.jpg";
import image3 from "../../assets/images/strategy.jpg";
import ServiceCard from "./ServiceCard";

const title = `Wordpress Development`;
const text = ` If you’re looking for a seamless experience, WordPress has to offer highly customizable and responsive website for your business. We’ve the best professionals for your WordPress site who can design, build as well as customize your website.`;
export default function Wordpress() {
  return (
    <Container>
      <ServiceCard title={title} imageSrc={image3} text={text} />
    </Container>
  );
}
