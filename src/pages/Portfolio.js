import React, { Suspense, lazy,memo } from "react";
import Spinner  from "../components/Spinner";

import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

const Portfolios = lazy(() => import("../components/portfolio/Portfolio"));
const PageHeader = lazy(() => import("../components/page-header/PageHeader"));

function Portfolio() {
  return (
    <Suspense fallback={<Spinner />}>
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
export default memo(Portfolio);