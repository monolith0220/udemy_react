import React from "react";

const ColorfulMessage = (props) => {
  const { color, childre } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
