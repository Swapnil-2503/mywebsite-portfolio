import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import YouTube from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/swapnil2.jpg"; // import the image here

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Swapnil</h2>
        <div className="prompt">
          <p>A Student with a passion for learning and creating.</p>
          <div className="icons-all">
            <a href="https://www.linkedin.com/in/swapnil-jadhav03"><LinkedInIcon/></a>
            <a href={"mailto:swapniljadhav6022@gmail.com"}><EmailIcon /></a>
            <a href={"https://www.github.com/swapnil-2503"}><GithubIcon /></a>
            <a href={"https://www.youtube.com/@CoderSj"}><YouTube/></a>
            <a href={"https://www.instagram.com/swapnil_._jadhav"}><InstagramIcon/></a>
            <a href={"https://www.twitter.com/Swapnil_J03"}><TwitterIcon /></a>
            <a href={"https://www.facebook.com/100023952010963"}><FacebookIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
