import React,{memo} from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Graphic from "./Graphic";
import AppDevelopment from "./AppDevelopment";
import WebDevelopment from "./WebDevelopment";
import "./tab.css";
import SectionTitle from "../section-title/SectionTitle";
const text = `Take a glimpse of our website, mobile app and graphics work and #ReThink your next idea with us.
`;
function Portfolio() {
  return (
    <Container className="portfolio">
      <SectionTitle
        title="Our Latest Project"
        className="text-center"
        description={text}
      />
      <Tabs
        defaultActiveKey="web-design"
        transition={false}
        id="portfolio"
        className="d-flex align-items-center justify-content-center "
      >
        <Tab eventKey="web-design" title="App Development">
          <AppDevelopment />
        </Tab>
        <Tab eventKey="web-development" title="Web Development">
          <WebDevelopment />
        </Tab>
        <Tab eventKey="branding" title="Graphic">
          <Graphic />
        </Tab>
      </Tabs>
    </Container>
  );
}
export default memo(Portfolio);