import React from "react";

export const HorizontalBar = (props) => (
  <hr
    style={{
      borderStyle: "solid",
      borderBottomColor: "white",
      borderBottomWidth: props.barWidth,
      width: props.width,
      minWidth: props.minWidth,
      marginLeft: 0,
    }}
  />
);
