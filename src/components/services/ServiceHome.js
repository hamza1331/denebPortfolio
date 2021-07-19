import React,{memo} from "react";
import { Row, Col } from "react-bootstrap";
import ServiceHomeCard from "./ServiceHomeCard";
import image1 from "../../assets/images/diamond-icon.png";
import image2 from "../../assets/images/editor-icon.png";
import image3 from "../../assets/images/bulb-icon.png";
import webDev from "../../assets/images/webDev.png";
import videoEditing from "../../assets/images/video-editing.png";
import rocket from "../../assets/images/rocket.png";
import SectionTitle from "../section-title/SectionTitle";


const text = `We believe in services that cater to your business needs. With the primary goal of serving the community, we optimize the use of technology integrated with human potential.`;

const serviceCardArray = [
  {
    id: "1",
    title: "UI/UX Design",
    imageSrc: image1,
    text: `We strive to comprehend the challenges that the industry is facing today and use our strong business acumen to build exclusive and ... `,
    buttonText: `Read More`,
  },
  {
    id: "2",
    title: "Web Development",
    imageSrc: webDev,
    text: `We design and develop completely responsive static and dynamic websites for your custom needs that help you attract your target ... `,
    buttonText: `Read More`,
  },
  {
    id: "3",
    title: "Graphic Design",
    imageSrc: image3,
    text: `We believe Design comes as a core of what we do @ThinkSolutionz. We begin with ideation, sketch and illustration to deliver high ...`,
    buttonText: `Read More`,
  },
  {
    id: "4",
    title: "Video Editing",
    imageSrc: videoEditing,
    text: `We put life into brands by creating videos and animations that makes your business moving. Our creative experts strive to deliver the ...`,
    buttonText: `Read More`,
  },
  {
    id: "5",
    title: "Wordpress",
    imageSrc: image2,
    text: `If you’re looking for a seamless experience, We’ve the best professionals for your WordPress site who can design, build as well ...`,
    buttonText: `Read More`,
  },
  {
    id: "6",
    title: "App Development",
    imageSrc: rocket,
    text: `Think Solutionz offers complete range of mobile applications development services for both major platforms I.e. Android and iOS ...`,
    buttonText: `Read More`,
  },
];
function ServiceHome() {
  return (
    <>
      <SectionTitle
        title="Our Service "
        description={text}
        className="text-center"
      />
      <Row className="d-flex justify-content-center align-items-center">
        {serviceCardArray.map((card) => (
          <Col key={card.id} className="col-lg-4 col-md-6 col-sm-8 col-10 my-3">
            <ServiceHomeCard
              title={card.title}
              imageSrc={card.imageSrc}
              text={card.text}
              buttonText={card.buttonText}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
export default memo(ServiceHome);
