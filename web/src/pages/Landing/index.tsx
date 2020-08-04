import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImage from "../../assets/images/logo.svg";
import landingImage from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

const Lading: React.FC = () => (
  <div id="page-landing">
    <div id="page-landing-content" className="container">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" />
        <h2>Your online studying platform.</h2>
      </div>

      <img className="hero-image" src={landingImage} alt="hero" />

      <div className="buttons-container">
        <Link to="study" className="study">
          <img src={studyIcon} alt="Study" />
          Study
        </Link>
        <Link to="teach" className="give-classes">
          <img src={giveClassesIcon} alt="Give classes" />
          Teach
        </Link>
      </div>

      <span className="total-connections">
        Total of 200 connections made{" "}
        <img src={purpleHeartIcon} alt="Purple heart" />
      </span>
    </div>
  </div>
);

export default Lading;
