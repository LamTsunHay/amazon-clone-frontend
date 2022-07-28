import React from "react";
import LeftSidePanel from "./LeftSide/LeftSidePanel";
import RightSidePanel from "./RightSide/RightSidePanel";
import "./DisplayContent.css"

const DisplayContent = (props) => {
  return (
    <div className="container">
      <div><LeftSidePanel /></div>
      <div><RightSidePanel /></div>
    </div>
  );
};

export default DisplayContent;
