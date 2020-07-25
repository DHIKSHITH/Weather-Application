import React from "react";
import "./style.css";

const Footer = (props) => {
  if (
    props.year === undefined ||
    props.month === undefined ||
    (props.date === undefined && props.weather === undefined)
  ) {
    return <div></div>;
  }
  return (
    <div className="footer">
      <span className="footer-text">
        {props.date} {props.month}-{props.year}
      </span>
    </div>
  );
};

export default Footer;
