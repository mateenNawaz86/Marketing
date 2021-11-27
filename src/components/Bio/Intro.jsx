import React from "react";
import introImg from "../../Assets/who-img.png";
import Button from "../UI/Button";

import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro-left-area">
          <img src={introImg} alt="Introduction" />
        </div>
        <div className="intro-right-area">
          <div className="intro-text">
            <span>Biography</span>
            <h1>Who we are</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              sapiente facere voluptates praesentium eum in laborum, cumque
              dignissimos recusandae optio possimus omnis a officia magni
              perferendis dolores totam, nam corrupti est. Nobis nulla in soluta
              excepturi eaque? Placeat, dolorem. Magnam.
            </p>

            <p>It's 2019 time to sink or swim</p>
            <Button type="submit">See More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
