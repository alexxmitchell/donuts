import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h4>Create your own or select from our crafted selection</h4>
      <div className="process">
        <section className="step1">
          <img alt="donut svg" />
          <h4>Step 1</h4>
          <p className="about-text">Select a donut </p>
        </section>
        <section className="step2">
          <img alt="topping svg" />
          <h4>Step 2</h4>
          <p className="about-text">Select toppings</p>
        </section>
        <section className="step3">
          <img alt="box svg" />
          <h4>Step 3</h4>
          <p className="about-text">
            Submit your order and get ready to enjoy your creation{" "}
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
