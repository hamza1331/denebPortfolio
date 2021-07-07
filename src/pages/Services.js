import React from "react";
import { Container } from "react-bootstrap";
import WorkFlow from "../components/work-flow/WorkFlow";
import Service from "../components/services/Service";
import PageHeader from "../components/page-header/PageHeader";
import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" />
      <Particles
        params={particle}
        width={"80%"}
        height={"500%"}
        style={{ position: "absolute",zIndex:"-1" }}
      />
      <Container>
        <Service />
        <WorkFlow />
      </Container>
    </>
  );
}
