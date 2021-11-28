import React from "react";
import Button from "../UI/Button";

import "./News.css";

const News = () => {
  return (
    <>
      <div className="news-container">
        <div className="news-inner">
          <span className="heading">Newsletter</span>
          <p>
            Do you want to get <span className="bold">Special News</span>
          </p>
        </div>

        <div className="form">
          <input type="email" placeholder="Drop your email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </>
  );
};

export default News;
