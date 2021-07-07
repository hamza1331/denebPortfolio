import React from "react";
import { Link } from "react-router-dom";
import "./watsapp.css"
const watsapp = () => {
  const styles = {
    floatIcon: {
      position: "fixed",
      bottom: "40px",
      right: "60px",
      width: "50px",
      height: "50px",
      borderRadius: "25px",
      backgroundColor: " rgb(37, 211, 102)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <Link
        to={{
          pathname:
            "https://wa.me/923100030703?text=Hello,%20I'm%20interested%20in%20your%20IT%20services",
        }}
        target="_blank"
        className="float-icon"
      >
        <i className="fab fa-whatsapp"></i>
      </Link>
  );
};

export default watsapp;
