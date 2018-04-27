import React, { Component } from "react";
import axios from "axios";
import "./Find.css";
import Map from "./Map/Map";
require("dotenv").config();

const Find = () => {
  return (
    <div className="where" href="#where">
      <h1>Find us</h1>
      <div className="find-container">
        <Map
          loadingElement={<div style={{ height: `100%` }} />}
          center={{ lat: 32.777638, lng: -96.79551 }}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${
            process.env.REACT_APP_PLACES_KEY
          }`}
          containerElement={<div style={{ height: `300px`, width: "300px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div>
          <h3 className="find-title">Good Donut</h3>
          <h3>501 S Ervay St</h3>
          <h3>Dallas, TX 75201</h3>
        </div>
      </div>
      <div>
        <h3>Let's get social</h3>
        <p>Links</p>
      </div>
    </div>
  );
};
export default Find;
