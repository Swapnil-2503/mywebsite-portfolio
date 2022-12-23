import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ContactPhone from "@material-ui/icons/Message";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to={"//www.instagram.com/swapnil_._jadhav"}><InstagramIcon/></Link>
        <Link to={"//www.twitter.com/Swapnil_J03"}><TwitterIcon /></Link>
        <Link to={"//www.facebook.com/100023952010963"}><FacebookIcon /></Link>
        {/* <Link to={"//tel:+91-9405251793"}><ContactPhone/></Link> */}
      </div>
     <p> made by using ReactJS with MaterialUI, React-Router-Dom &copy; Swapnil</p>
    </div>
  );
}

export default Footer;
