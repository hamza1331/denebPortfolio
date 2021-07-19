import React from "react";
import Contact from "./Contact";
import { Container, Row, Col } from "react-bootstrap";
import contactImage from "../../assets/images/contact-image.png";
import SectionTitle from "../section-title/SectionTitle";
import Watsapp from "../cta/watsapp";


const title = `Get In Touch With Us`;
const text = `Are you ready to get aboard with us to #ReThink or you got any query/suggestion? We’re just a message away.`;
export default function GetInTouch() {
  return (
    <Container>
      <Watsapp />
      <Row className="my-5 d-flex align-items-center">
        <Col className="col-12 col-lg-6">
          <img src={contactImage} alt="contact" className="img-fluid" />
        </Col>
        <Col className="col-12 col-lg-6">
          <SectionTitle title={title} description={text} />
          <Contact />
        </Col>
      </Row>
    </Container>
  );
}
