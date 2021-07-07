import React from "react";
import { Container } from "react-bootstrap";
import WorkExperience from "../components/experience/WorkExperience";
import Skills from "../components/progressbar/Skills";
import PageHeader from "../components/page-header/PageHeader";
import Particles from "react-particles-js";
import particle from "../particlesjs-config.json";
export default function AboutUs() {
  return (
    <>
      <PageHeader title="About Us" />
      <Particles
        params={particle}
        width={"80%"}
        height={"550%"}
        style={{ position: "absolute",zIndex:"-1"}
        
      }/>
      <Container>
        <Skills />
        <WorkExperience />
      </Container>
    </>
  );
}
