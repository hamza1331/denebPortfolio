import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/homeGif.webp";
import styles from "./HomeHeader.module.css";

export default function HomeHeader() {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col className="col-lg-5 col-12">
          <h1 className={styles.h1}>
            We are Creative<br></br> <span> Dev Agency</span>
          </h1>
          {/* <h4 className={styles.h4}>
            I am professional freelance Web Designer
          </h4> */}
          <p>
            Our core competency is the design and development of web-based
            solutions and mobile applications. We have a proven track record to
            meet inhuman deadlines and our motto is to deliver quality work at a
            lightning pace without exceeding the budget. ThinkSolut!onz has a
            clientele of complex projects ranging from Mobile app, WordPress
            solutions to video editing and animation.
          </p>
          <button className={styles.buttonHire}>Hire Us</button>
        </Col>
        <Col className="col-lg-7 col-12">
          <img src={image1} alt="home" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
