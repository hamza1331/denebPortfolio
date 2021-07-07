import React from "react";
import PageHeader from "../components/page-header/PageHeader";
import Portfolios from "../components/portfolio/Portfolio";
import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";
export default function Portfolio() {
  return (
    <>
      <PageHeader title="Portfolios" />
      <Particles
        params={particle}
        width={"80%"}
        height={"200%"}
        style={{ position: "absolute",zIndex:"-1"}
        
      }/>
      
      <Portfolios />
    </>
  );
}
