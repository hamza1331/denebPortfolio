import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo-colored.png";
export default function Footer() {
  return (
    <>
      <Container className="mt-5">
        <Row className={styles.h3}>
          <Col className="col-12 col-md-4 my-3">
            <div className="w-50 my-3">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <p className="text-black-50">
              Our core competency is the design and development of web-based
              solutions and mobile applications. We have a proven track record
              to meet inhuman deadlines and our motto is to deliver quality work
              at a lightning pace without exceeding the budget.
            </p>
            <div className={styles.icon}>
              <Link
                to={{ pathname: "https://www.facebook.com/Thinksolutionz1/" }}
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/think-solutionz-287693190/",
                }}
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                to={{ pathname: "https://www.behance.net/thinksolutionz" }}
                target="_blank"
              >
                <i className="fab fa-behance"></i>
              </Link>
            </div>
          </Col>
          <Col className="col-12 col-md-4 my-3">
            <h3>Links</h3>
            <ul className={styles.uL}>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              {/* <li>
                <Link to="/blogs">Blogs</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-4 my-3">
            <h3>Contact Us</h3>
            <ul className={styles.uL}>
              <li>
                <div>
                  <i className="fas fa-phone-square"></i>
                </div>
                <div>
                  <p>+92 310 0030703</p>
                  <p>+92 317 2356704</p>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p>info@thinksolutionz.org</p>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p>
                    Think Solutionz, University Road Block 13 A Gulshan-e-Iqbal,
                    Karachi
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-light py-3 text-center">
        <p>
          Copyright &copy; 2021 &nbsp;
          <span style={{ color: "#F15927", fontWeight: "600" }}>
            ThinkSolutionz
          </span>
          &nbsp; All Rights Reserved
        </p>
      </div>
    </>
  );
}
