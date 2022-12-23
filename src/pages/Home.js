import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import YouTube from "@material-ui/icons/YouTube";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Swapnil</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to={"www.linkedin.com/in/swapnil-jadhav03"}><LinkedInIcon/></Link>
          <Link to={"mailto:swapniljadhav6022@gmail.com"}><EmailIcon /></Link>
          <Link to={"www.github.com/swapnil-2503"}><GithubIcon /></Link>
         <Link to={"www.youtube.com/@CoderSj"}><YouTube/></Link>
        </div>
      </div>
      <div className="skills">
        <h4>Coding Achievements</h4>
        {/* <ol className="list">
          <li className="item">
            <h4> Coding</h4>
            <span>
              ReactJS, HTML, CSS, React Native,NPM,
              BootStrap, MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h4>Back-End</h4>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h4>Languages</h4>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol> */}
        <ul className="list1">
          <li className="item">2 stars on codechef</li>
          <li className="item">Gold badge for java on hackerrank</li>
          <li className="item">Titled Runner up in SIH hackathon(university level) among 50+ teams</li>
          <li className="item">Global Rank 1299/20k for google Kickstart Round F</li>
        </ul>
        <h4>Languages</h4>
        <ul className="list2">
          <li className="item">Java</li>
          <li className="item">Python</li>
          <li className="item">JavaScript</li>
          <li className="item">SQL</li>
        </ul>
        <h4>Tools & Technologies</h4>
        <ul className="list3">
          <li className="item">ReactJS</li>
          <li className="item">GIT</li>
          <li className="item">Windows</li>
          <li className="item">Android Studio</li>
          <li className="item">Firebase</li>
          <li className="item">MATLAB</li>
          <li className="item">NodeJS</li>
        </ul>
        <h4>Coding Profiles</h4>
        <ul className="list4">
          <li className="item"><a href="https://www.codechef.com/users/the_sj">Codechef</a></li>
          <li className="item"><a href="www.leetcode.com/swapnil-2503">Leetcode</a></li>
          <li className="item"><a href="www.hackerrank.com/swapniljadhav_s1">Hackerrank</a></li>
          <li className="item"><a href="https://www.hackerearth.com/@swapnil_2003">Hackerearth</a></li>
          <li className="item"><a href="https://auth.geeksforgeeks.org/user/swapniljadhav6022">GeeksForGeeks</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
