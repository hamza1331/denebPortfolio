import React from "react";
// import { Link } from "react-router-dom";
import { Row, Container, Tabs, Tab } from "react-bootstrap";
import uiux from "../../assets/images/diamond-icon.png";
import wordpress from "../../assets/images/editor-icon.png";
// import webDev from "../../assets/images/development-icon.png";
import webDev from "../../assets/images/webDev.png";
import graphic from "../../assets/images/bulb-icon.png";
// import video from "../../assets/images/analysis-icon.png";
import video from "../../assets/images/video-editing.png";
import mobileApp from "../../assets/images/mobile-app.png";
// import rocket from "../../assets/images/rocket.png";
// import rocket from "../../assets/images/rocket-icon.png";

import "./tab.css";
import UiUx from "./UiUx";
import WebDevelopment from "./WebDevelopment";
import Wordpress from "./Wordpress";
import AppDevelopment from "./AppDevelopment";
import VideoEditing from "./VideoEditing";
import GraphicDesign from "./GraphicDesign";

const serviceAll = [
  {
    id: "1",
    title: "UI/UX",
    imageSrc: uiux,
    panel: <UiUx />,
  },
  {
    id: "2",
    title: "Wordpress",
    imageSrc: wordpress,
    panel: <Wordpress />,
  },
  {
    id: "3",
    title: "Web App",
    imageSrc: webDev,
    panel: <WebDevelopment />,
  },
  {
    id: "4",
    title: "Mobile App",
    imageSrc: mobileApp,
    panel: <AppDevelopment />,
  },
  {
    id: "5",
    title: "Video Editing",
    imageSrc: video,
    panel: <VideoEditing />,
  },
  {
    id: "6",
    title: "Graphic",
    panel: <GraphicDesign />,
    imageSrc: graphic,
  },
];

const TitleC = ({ title, imageSrc }) => (
  <>
    <img src={imageSrc} alt="dsdgh" />
    <h5>{title}</h5>
  </>
);
export default function Services() {
  return (
    <Container>
      <Row className="my-5 d-flex justify-content-center  align-content-center">
        <Tabs
          defaultActiveKey="web design"
          id="noanim-tab-example"
          className="d-flex justify-content-center"
        >
          {serviceAll.map((service) => (
            <Tab
              eventKey={service.title}
              title={TitleC(service)}
              key={service.id}
            >
              {service.panel}
            </Tab>
          ))}
        </Tabs>
      </Row>
      {/* <WorkFlow /> */}
    </Container>
  );
}
