import React from "react";
import { Container } from "react-bootstrap";
import WorkFlowSingle from "./WorkFlowSingle";
import SectionTitle from "../section-title/SectionTitle";

import designImg from "../../assets/images/service2.png";
import analysisImg from "../../assets/images/analysis.png";
import developmentImg from "../../assets/images/development.png";
import deployImg from "../../assets/images/deploy.png";
import deliverImg from "../../assets/images/deliver.png";

import analysisIcon from "../../assets/images/analysis-icon.png";
import devIcon from "../../assets/images/development-icon.png";
import launch from "../../assets/images/rocket-icon.png";
import designIcon from "../../assets/images/design.png";
import deliverIcon from "../../assets/images/delivery-truck.png";


const analysis = `We analyze the requirements and give better suggestions for the development of business.`;
const design = `Team think solution has best designers for your websites or web applications.`;
const development = `We care about your security of business and lead you to a successful journey of business.`;
const deploy = `After testing the product and passes each testing phase, the product or service is ready to go live.`;
const deliver = `We deliver the projects or products with in the given time.`;
const WorkFlowArray = [
  {
    id: "1",
    order: true,
    text: analysis,
    imageSrc: analysisImg,
    icon: analysisIcon,
    title: `Analysis`,
  },
  {
    id: "2",
    order: false,
    text: design,
    imageSrc: designImg,
    icon: designIcon,
    title: `Design`,
  },
  {
    id: "3",
    order: true,
    text: development,
    imageSrc: developmentImg,
    icon: devIcon,
    title: `Development`,
  },
  {
    id: "4",
    order: false,
    text: deploy,
    imageSrc: deployImg,
    icon: launch,
    title: `Deploy`,
  },
  {
    id: "5",
    order: true,
    text: deliver,
    imageSrc: deliverImg,
    icon: deliverIcon,
    title: `Deliver`,
  },
];
const title = `Our Workflow`;
const text2 = `We work with transparency, we follow the iterative module of development. Each iteration helps us
to understand the requirements of our clients explicitly.`;
export default function WorkFlow() {
  return (
    <Container>
      <SectionTitle title={title} description={text2} className="text-center" />
      {WorkFlowArray.map((workflow) => (
        <WorkFlowSingle
          key={workflow.id}
          title={workflow.title}
          description={workflow.text}
          imageSrc={workflow.imageSrc}
          order={workflow.order}
          icon={workflow.icon}
        />
      ))}
    </Container>
  );
}
