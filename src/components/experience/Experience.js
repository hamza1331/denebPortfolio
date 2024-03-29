import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import styles from "./Experience.module.css";
import "./experience.css";

export default function Experience({
  description,
  name,
  order,
  category,
  id,
  duration,
}) {
  return (
    <div className={styles.singleExperience}>
      <div className="row d-flex align-items-center">
        <div className={`col-md-5 order3 ${order ? "order-first order2" : "order-last"}`}>
          <div className={styles.textBox}>
            <p>{description}</p>
          </div>
        </div>
        <div
          className={`col-md-2 order1 ${id === "6" ? `${styles.removeDotLine}` : ""}`}
        >
          <div className={styles.icon}>
            <h3>{id}</h3>
          </div>
        </div>
        <div className={`col-md-5 order2 ${order ? "order-last " : "order-first "}`}>
          <div
            className={`${styles.infoBox} ${
              order ? "text-right" : "text-left "
            }`}
          >
            <h4>{category}</h4>
            <h5>{name}</h5>
            <h6>{duration}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
