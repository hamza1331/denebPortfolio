import React, { Suspense, lazy } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

const PageHeader = lazy(() => import("../components/page-header/PageHeader"));
const Watsapp = lazy(() => import("../components/cta/watsapp"));

// import Contact from "../components/contact/Contact";
// import SectionTitle from "../components/section-title/SectionTitle";
// const title = `Send Us Message`;
export default function ContactUs() {
  return (
    <Suspense fallback={<Spinner animation="grow" variant="warning" />}>
      <PageHeader title="Contact Us" />
      <Particles
        params={particle}
        width={"80%"}
        height={"200%"}
        style={{ position: "absolute", zIndex: "-1" }}
      />
      {/* <Row className="d-flex align-items-center justify-content-center p-2">
        <Col className="col-lg-8 col-sm-10 col-12 ">
          <SectionTitle title={title} className="text-left" />
          <Contact />
        </Col>
      </Row> */}
      <Container>
        <Watsapp />
        <Row>
          <Col className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.806138482615!2d67.07566251432098!3d24.904593449622165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f33909b9b77%3A0x64ca022065970f60!2sThink%20Solutionz!5e0!3m2!1sen!2s!4v1625576095693!5m2!1sen!2s"
              width="100%"
              title="home address"
              height="450"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Suspense>
  );
}
