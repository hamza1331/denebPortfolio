import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import styles from "./Contact.module.css";
export default function Contact() {
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [lName, setlName] = useState("");
  const [fName, setfName] = useState("");
  const [messageText, setMessageText] = useState("");
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState(null);



  // const getValues = (name, value) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  // onChange={(e) => {
  //   getValues("fName", e.target.value);
  // }}

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      fName !== "" &&
      lName !== "" &&
      emailAddress !== "" &&
      phone !== "" &&
      messageText !== ""
    ) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailAddress, phone, lName, fName, messageText }),
      };
      fetch("https://a3f8b1948510.ngrok.io/api/sendEmail", requestOptions)
        .then((response) => response.json())
        .then((data) => setFormData(data));
        setlName("");
        setfName("");
        setMessageText("");
        setEmailAddress("");
        setPhone("");
        setError(false);
      
    } else {
      setError(true);
      setFormData(null);
    }
    console.log("formData",formData)
    
  };
  return (
    <Form onSubmit={handleSubmit}>
        
        {error&&<Alert variant={formData===null&&"danger"}>Please Fill Form</Alert>}
        {formData!==null&&<Alert variant={"success"}>Form Successfully send</Alert>}
  
      <Row className="my-3">
        <Col xs={12} sm={6} className="mb-3">
          <Form.Control
            className={styles.inputStyled}
            placeholder="First name"
            type="text"
            name="fName"
            value={fName}
            onChange={(e) => {
              setfName(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} sm={6} className="mb-3">
          <Form.Control
            className={styles.inputStyled}
            placeholder="Last name"
            type="text"
            name="lName"
            value={lName}
            onChange={(e) => {
              setlName(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12} sm={6} className="mb-3">
          <Form.Control
            className={styles.inputStyled}
            placeholder="Email Address"
            type="email"
            value={emailAddress}
            name="emailAddress"
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} sm={6} className="mb-3">
          <Form.Control
            className={styles.inputStyled}
            placeholder="Phone Number "
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <Form.Control
            className={styles.inputStyled}
            as="textarea"
            rows="5"
            placeholder="message..."
            name="messageText"
            value={messageText}
            onChange={(e) => {
              setMessageText(e.target.value);
            }}
          />
        </Col>
      </Row>
    
      <button
        type="submit"
        style={{ lineHeight: "0px" }}
        className="my-3 px-5 py-2 btn btn_submit cta_btn"
      >
        Submit
      </button>
    </Form>
  );
}
