import React, { Suspense, lazy,memo } from "react";
import { Container } from "react-bootstrap";
import Spinner from "../components/Spinner";

import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

const WorkFlow = lazy(() => import("../components/work-flow/WorkFlow"));
const Service = lazy(() => import("../components/services/Service"));
const PageHeader = lazy(() => import("../components/page-header/PageHeader"));

function Services() {
  return (
    <Suspense fallback={<Spinner />}>
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
export default memo(Services);