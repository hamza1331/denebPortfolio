import React, { Suspense, lazy } from "react";
import { Container, Spinner } from "react-bootstrap";

import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

const WorkFlow = lazy(() => import("../components/work-flow/WorkFlow"));
const Service = lazy(() => import("../components/services/Service"));
const PageHeader = lazy(() => import("../components/page-header/PageHeader"));

export default function Services() {
  return (
    <Suspense fallback={<Spinner animation="grow" variant="warning" />}>
      <PageHeader title="Our Services" />
      <Particles
        params={particle}
        width={"80%"}
        height={"500%"}
        style={{ position: "absolute", zIndex: "-1" }}
      />
      <Container>
        <Service />
        <WorkFlow />
      </Container>
    </Suspense>
  );
}
