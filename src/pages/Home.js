import React, { Suspense, lazy } from "react";

import { Container, Spinner } from "react-bootstrap";
import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

const Menu = lazy(() => import("../components/navbar/Menu"));
const HomeHeader = lazy(() => import("../components/HomeHeader/HomeHeader"));
const ServiceHome = lazy(() => import("../components/services/ServiceHome"));
const Portfolio = lazy(() => import("../components/portfolio/Portfolio"));
const Stats = lazy(() => import("../components/stats/Stats"));
const Testimonial = lazy(() =>
  import("../components/testimonials/Testimonial")
);
const Watsapp = lazy(() => import("../components/cta/watsapp"));
const Cta = lazy(() => import("../components/cta/Cta"));

export default function Home() {
  return (
    <Suspense fallback={<Spinner animation="grow" variant="warning" />}>
      <Container>
        <Menu />
        <Particles
          params={particle}
          width={"80%"}
          height={"660%"}
          style={{ position: "absolute", zIndex: "-1" }}
        />
        <HomeHeader />
        <ServiceHome />
        <Portfolio />
        <Stats />
        <Testimonial />
        <Watsapp />
        <Cta />

        {/* <Pricing /> */}
        {/* <BlogHome /> */}
      </Container>
    </Suspense>
  );
}
