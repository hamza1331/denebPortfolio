import React from "react";
import infinity from "../assets/Infinity.svg";

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
const Spinner = () => {
  return (
    <div style={styles.container}>
      <img src={infinity} alt="spinner" />
    </div>
  );
};

export default Spinner;
