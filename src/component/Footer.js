import React from "react";
import "./style.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <span className="footer-text">{props.date}</span>
    </div>
  );
};

export default Footer;
