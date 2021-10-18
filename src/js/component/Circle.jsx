import React from "react";
import PropTypes from "prop-types";

function Circle(props) {
  return (
    <div
      onClick={props.onClick}
      className={`circle bg-${props.lights.bg} ${props.selected ? "glow" : ""}`}
    ></div>
  );
}

Circle.propTypes = {
  lights: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Circle;
