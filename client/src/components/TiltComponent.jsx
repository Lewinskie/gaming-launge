import React from "react";
import Tilt from "react-parallax-tilt";

const Tilts = ({ children, ...rest }) => {
  return <Tilt {...rest}>{children}</Tilt>;
};
export default Tilts;
