import React from "react";
import "../Style/Heading.css"; // Import the CSS file for the Heading component

const Heading = ({ title, subtitle }) => {
  return (
    <div className="heading-container">
      <h3 className="heading-title">{title}</h3>
      {subtitle && <p className="heading-subtitle">{subtitle}</p>}
    </div>
  );
};

export default Heading;
