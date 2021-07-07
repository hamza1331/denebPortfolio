import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import image1 from "../../assets/images/man.png";
import SectionTitle from "../section-title/SectionTitle";

const ProgressTitleAndPercent = [
  {
    id: "1",
    title: "UI/UX Design",
    percent: "85",
  },
  {
    id: "2",
    title: "Web Development",
    percent: "90",
  },
  {
    id: "3",
    title: "App Development ",
    percent: "80",
  },
  {
    id: "4",
    title: "Graphic Design",
    percent: "70",
  },
];
const title = `Let Know Our Expert Skills`;
const text = ` 
Our core competency is the design and development of web-based solutions and mobile applications. We have a proven track record to meet inhuman deadlines and our motto is to deliver quality work at a lightning pace without exceeding the budget. ThinkSolutionz has a clientele of complex projects ranging from Mobile app, WordPress solutions to video editing and animation.`;
export default function Skills() {
  return (
    <Container>
      <Row className="py-5 d-flex align-items-center justify-content-center">
        <Col className="col-12 col-sm-12  col-lg-7">
          <SectionTitle title={title} description={text} />
          {ProgressTitleAndPercent.map((progress) => (
            <ProgressBar
              title={progress.title}
              percent={progress.percent}
              key={progress.id}
            />
          ))}
        </Col>
        <Col className="col-12 col-sm-12  col-lg-5  ">
          <img alt="" src={image1} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
