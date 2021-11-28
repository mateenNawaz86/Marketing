import React, { useState } from "react";
import Button from "../UI/Button";

import "./News.css";

const News = () => {
  const [enteredInput, setEnteredInput] = useState("");

  const inpChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredInput);
    setEnteredInput("");
  };
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
          <input
            type="email"
            placeholder="Drop your email"
            onChange={inpChangeHandler}
            value={enteredInput}
          />
          <Button type="submit" onClick={submitHandler}>
            Subscribe
          </Button>
        </div>
      </div>
    </>
  );
};

export default News;
