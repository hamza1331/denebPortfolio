import React, { Suspense, lazy,memo } from "react";
import { Container } from "react-bootstrap";
import Spinner  from "../components/Spinner";
import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

const PageHeader = lazy(() => import("../components/page-header/PageHeader"));
const WorkExperience = lazy(() =>
  import("../components/experience/WorkExperience")
);
const Skills = lazy(() => import("../components/progressbar/Skills"));

function AboutUs() {
  return (
    <Suspense fallback={<Spinner />}>
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
export default memo(AboutUs);
