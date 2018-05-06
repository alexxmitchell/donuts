import React from "react";
import "./About.css";
import donut from "../../images/donut.png";
import filled from "../../images/filled-donut.png";
import enjoy from "../../images/enjoy.png";

const About = () => {
  return (
    <div className="about-container">
      <h4>The process</h4>
      <div className="process">
        <section className="step1">
          <h4>Step #1</h4>
          <img className="icon" src={donut} alt="donut svg" />

          <p className="about-text">Select a donut </p>
          <p>Choose between cake and chocolate</p>
        </section>
        <section className="step2">
          <h4>Step #2</h4>
          <img src={filled} alt="complete donut" />

          <p className="about-text">Add toppings</p>
          <p>Choose up to 4 toppings. </p>
          <p>
            Start with an icing => add sweet / savory => finish with a drizzle
          </p>
        </section>
        <section className="step3">
          <h4>Step #3</h4>
          <img src={enjoy} alt="bitten donut" />

          <p className="about-text">Order and enjoy! </p>
        </section>
      </div>
    </div>
  );
};

export default About;
