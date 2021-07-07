import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import SectionTitle from "../section-title/SectionTitle";
import img1 from "../../assets/images/bg1.jpg";
import img2 from "../../assets/images/bg2.jpg";
import shape1 from "../../assets/images/shape_1.png";
import "./testimonial.css";
const text = `See what our clients say about us now. You could be next too!`;
const Testimonial = () => {
  const testimonial = [
    {
      content:
        "Think Solutionz are amazing always deliver everything quickly and do extra tutorials etc for me, I highly recommend and will be using them again and again.",
      author: "Beth Cooper",
    },
    {
      content:
        "Think Solutionz has a hands-on experience in designing that is reflecting in their creative work. I would definitely come again for more tasks. Highly recommended",
      author: "Henry Mark",
    },
    {
      content:
        "I am based in South Africa as was in search for a quality team which can produce promotional videos. Think Solutionz did exactly that. Really impressed with their service and quality.",
      author: "Jonty",
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
                        {/* <h5>Web Developer</h5> */}
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
