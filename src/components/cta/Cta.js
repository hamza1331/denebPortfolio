import React,{memo} from "react";
import "./cta.css"
import {Link} from 'react-router-dom'
import { Container } from "react-bootstrap";
const Cta = () => {
  return (
    <section className="cta">
      <Container>
        <div className="cta_wrapper">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta_content">
                <h3>Have Any Project in Mind ?</h3>
                <p>
                Lets Discuss your next big Product now!
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="button_box">
                <Link className="cta_btn" to="/contact">
                  Hire Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(Cta);
