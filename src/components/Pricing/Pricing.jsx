import React from "react";
import BtnOutline from "../UI/BtnOutline";
import Card from "../UI/Card";

import "./Pricing.css";

const Pricing = () => {
  const priceCards = [
    {
      pkgTitle: "Silver Package",
      price: "100",
    },
    {
      pkgTitle: "Gold Package",
      price: "140",
    },
    {
      pkgTitle: "Platinum Package",
      price: "190",
    },
  ];

  return (
    <>
      <div className="pricing-container">
        <div className="inner-price-container">
          <div className="pricing-title">
            <span>Pricing</span>
            <h1>Our Pricing</h1>
          </div>

          <div className="price-card">
            {priceCards.map((items, index) => {
              return (
                <div className="price-item" key={index}>
                  <Card>
                    <div className="price-card__inner">
                      <span>{items.pkgTitle}</span>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatem sed sunt dolore laborum, illum at.
                      </p>
                      <h3>${items.price}</h3>
                      <BtnOutline type="submit">See details</BtnOutline>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="more-cards">
            <div className="dot" />
            <div className="dot" />
            <div className="dot clr-dot" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
