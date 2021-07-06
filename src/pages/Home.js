import React from "react";
import ServiceHome from "../components/services/ServiceHome";
import { Container } from "react-bootstrap";
import Pricing from "../components/pricing/Pricing";
import BlogHome from "../components/blogs/BlogHome";
import Portfolio from "../components/portfolio/Portfolio";
import Stats from "../components/stats/Stats";
import Testimonial from "../components/testimonials/Testimonial";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Menu from "../components/navbar/Menu";
import Cta from "../components/cta/Cta";

export default function Home() {
  return (
    <Container>
      <Menu />
      <HomeHeader />
      <ServiceHome />
      <Portfolio />
      {/* <Pricing /> */}
      <Stats/>
      <Testimonial />
      <Cta/>
      {/* <BlogHome /> */}
    </Container>
  );
}
