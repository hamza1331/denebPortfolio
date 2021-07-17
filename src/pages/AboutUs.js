import React, { Suspense, lazy } from "react";
import { Container, Spinner } from "react-bootstrap";

import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

const PageHeader = lazy(() => import("../components/page-header/PageHeader"));
const WorkExperience = lazy(() =>
  import("../components/experience/WorkExperience")
);
const Skills = lazy(() => import("../components/progressbar/Skills"));

export default function AboutUs() {
  return (
    <Suspense fallback={<Spinner animation="grow" variant="warning" />}>
      <PageHeader title="About Us" />
      <Particles
        params={particle}
        width={"80%"}
        height={"550%"}
        style={{ position: "absolute", zIndex: "-1" }}
      />
      <Container>
        <Skills />
        <WorkExperience />
      </Container>
    </Suspense>
  );
}
