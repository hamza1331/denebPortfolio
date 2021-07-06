import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import SectionTitle from "../section-title/SectionTitle";
import img1 from "../../assets/images/bg1.jpg";
import img2 from "../../assets/images/bg2.jpg";
import shape1 from "../../assets/images/shape_1.png";
import "./testimonial.css";
const text = `Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu  tristique ligula.`;
const Testimonial = () => {
  const testimonial = [
    {
      content:
        "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
      author: "Sarah M., Director of Events",
    },
    {
      content:
        "I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.",
      author: "Sarah M., CCHS Foundation",
    },
    {
      content:
        "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
      author: "Alexander B., Pan-Mass Challenge",
    },
    {
      content:
        "MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.",
      author: "Amy C., One Less Orphan Fund",
    },
  ];

  return (
    <Container>
      <SectionTitle
        title="What People Say"
        description={text}
        className="text-center"
      />
      <Row style={{position:"relative"}}>
          <div className="shape1"></div>
          <div className="shape2"></div>
        <Col>
          <div
            style={{
              height: 500,
              // background: "grey",
              // color: "white",
              
            }}
            className="testimonial_slide"
          >
            <Carousel interval={1000}>
              {testimonial.map((c, index) => {
                return (
                  <Carousel.Item interval={5000}>
                    <div class="single_testimonial">
                    <div class="qoute"><i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg></i></div>
                      <div class="client_info">
                        <h3>{c.author}</h3>
                        <h5>Web Developer</h5>
                        <p>{c.content}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
