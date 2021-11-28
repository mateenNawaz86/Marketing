import React from "react";

import "./BtnOutline.css";

const BtnOutline = (props) => {
  return (
    <button className="btn-outline" type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default BtnOutline;
