import React from "react";

import "./BtnOutline.css";

const BtnOutline = (props) => {
  return (
    <button className="btn-outline" type={props.type}>
      {props.children}
    </button>
  );
};

export default BtnOutline;
