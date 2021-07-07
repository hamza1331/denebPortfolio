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
import Watsapp from "../components/cta/watsapp";


import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";

export default function Home() {
  return (
    <Container>
      <Menu />
      <Particles
        params={particle}
        width={"80%"}
        height={"660%"}
        style={{ position: "absolute",zIndex:"-1"}
        
      }/>
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
  );
}
