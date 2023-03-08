import React, { useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ContactPhone from "@material-ui/icons/Message";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import PhotoProfile from "../assets/swapnil2.jpg";


function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <img src={PhotoProfile} alt="Profile Photo" />
        <p>&copy; 2023 Swapnil Jadhav. All rights reserved.</p>
      </div>
      <div className="right">
        <a href="https://www.facebook.com/100023952010963">
          <FacebookIcon />
        </a>
        <a href="https://www.twitter.com/Swapnil_J03">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/swapnil_._jadhav">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/swapnil-jadhav03">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;

