import React from "react";
import "../styles/Projects.css";
import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.jpg";

const projects = [
  {
    name: "Notepad Using Java Swing",
    image: Proj1,
    skills: ["Java", "Java Swing", "Gui Design","File I/O","Debugging","Problem-Solving"],
    codeLink: "https://github.com/Swapnil-2503/Text-Editor",
  },
  {
    name: "Tic Tac Toe Game",
    image: Proj2,
    skills: ["HTML", "CSS", "JavaScript","DOM manipulation","Event Handling","Basic Algorithm Skills","Debugging","Problem Solving"],
    codeLink: "https://github.com/Swapnil-2503/TicTacToe",
  },
  {
    name: "Rain Measurement Using Ultrasonic Sensor",
    image: Proj3,
    skills: ["Python", "Hardware Interfacing", "Data Analysis"],
    codeLink: "https://github.com/Swapnil-2503/Rain-Measurement",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Personal Projects</h1>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div key={idx} className="project-item">
            <h2>{project.name}</h2>
            <img  src={project.image} alt="ScreenShot"/>
            <p>Skills used: {project.skills.join(", ")}</p>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              Source code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
