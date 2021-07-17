import React, { Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";

import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

const Portfolios = lazy(() => import("../components/portfolio/Portfolio"));
const PageHeader = lazy(() => import("../components/page-header/PageHeader"));

export default function Portfolio() {
  return (
    <Suspense fallback={<Spinner animation="grow" variant="warning" />}>
      <PageHeader title="Portfolios" />
      <Particles
        params={particle}
        width={"80%"}
        height={"200%"}
        style={{ position: "absolute", zIndex: "-1" }}
      />

      <Portfolios />
    </Suspense>
  );
}
