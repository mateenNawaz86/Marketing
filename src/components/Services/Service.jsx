import React from "react";
import Card from "../UI/Card";

import "./Service.css";
import Button from "../UI/Button";

const Service = () => {
  const cardData = [
    {
      imgSrc: "../img/social-media.png",
      cardTitle: "Social Media management",
    },
    {
      imgSrc: "../img/social-growth.png",
      cardTitle: "Social Growth Campaign",
    },
    {
      imgSrc: "../img/branding.png",
      cardTitle: "Branding & Media",
    },
    {
      imgSrc: "../img/influencer.png",
      cardTitle: "Influencer Marketing",
    },
    {
      imgSrc: "../img/advertisement.png",
      cardTitle: "Social Media Paid Advertising",
    },
    {
      imgSrc: "../img/content-marketing.png",
      cardTitle: "Content Marketing services",
    },
  ];
  return (
    <>
      <div className="service-container">
        <div className="title-section">
          <span>our services</span>
          <h1>what we offer</h1>
        </div>

        <div className="service-cards">
          {cardData.map((item, index) => {
            return (
              <div className="card-item" key={index}>
                <Card>
                  <div className="inner-card">
                    <div className="card-img">
                      <img src={item.imgSrc} alt="Marketing" />
                    </div>
                    <h2>{item.cardTitle}</h2>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae id dolores, quaerat beatae expedita debitis!
                    </p>

                    <div className="card-btn">
                      <Button>See More</Button>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
