import React from "react";
// import { Container } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../section-title/SectionTitle";
import Experience from "./Experience";
const mobileDesc = `Think Solutionz offers complete range of mobile applications development services for both major platforms I.e. Android and iOS. With our satisfactory process, we offer our mobile application services irrespective of type or size of business. Either you’re a startup or well-established business, Team Think Solutionz will take care of your business value.`;
const webDesc = `We design and develop completely responsive static and dynamic websites for your custom needs that help you attract your target customers and convert them into potential sales either you’re offering a product or services. Team Think Solutionz always foresee the excellence in your satisfaction`;
const wordpressDesc = `If you’re looking for a seamless experience, WordPress has to offer highly customizable and responsive website for your business. We’ve the best professionals for your WordPress site who can design, build as well as customize your website.`;
const uiuxDesc = `We strive to comprehend the challenges that the industry is facing today and use our strong business acumen to build exclusive and unprecedented solutions for them. Our mission is to bring best quality in the innovative techniques that are designed by our tech-experts.  `;
const graphicDesc = `We believe Design comes as a core of what we do @ThinkSolutionz. We begin with ideation, sketch and illustration to deliver high quality design, bespoke typography and artwork. As we put our effort and find our inspirations from culture and idea behind the design, the outcome is creative, accurate and natural.`;
const videoDesc = `We put life into brands by creating videos and animations that makes your business moving. Our creative experts strive to deliver the message of your brand and its core values.`;

const experienceArray = [
  {
    id: "1",
    order: true,
    // name: "Wali Ullah",
    category: "Mobile Application Development",
    description: mobileDesc,
    // duration: "January 2020 - February 2021",
  },
  {
    id: "2",
    order: false,
    // name: "Wali Ullah",
    category: "Web Application Development",
    description: webDesc,
    // duration: "January 2020 - February 2021",
  },
  {
    id: "3",
    order: true,
    // name: "Wali Ullah",
    category: "Wordpress Development",
    description: wordpressDesc,
    // duration: "January 2020 - February 2021",
  },
  {
    id: "4",
    order: false,
    // name: "Wali Ullah",
    category: "UI/UX Design",
    description: uiuxDesc,
    // duration: "January 2020 - February 2021",
  },
  {
    id: "5",
    order: true,
    // name: "Wali Ullah",
    category: "Graphic Design",
    description: graphicDesc,
    // duration: "January 2020 - February 2021",
  },
  {
    id: "6",
    order: false,
    // name: "Wali Ullah",
    category: "Video Editing",
    description: videoDesc,
    // duration: "January 2020 - February 2021",
  },
];
const title = `Our Work Experience`;
const text = `We have a proven track record to meet inhuman deadlines and our motto is to deliver quality work at a lightning pace without exceeding the budget. `;
export default function WorkExperience() {
  return (
    <Container>
      <SectionTitle title={title} description={text} className="text-center" />
      <Row className="py-5">
        {experienceArray.map((ex) => (
          <Col className="col-12">
            <Experience
              id={ex.id}
              name={ex.name}
              order={ex.order}
              category={ex.category}
              duration={ex.duration}
              description={ex.description}
            />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
