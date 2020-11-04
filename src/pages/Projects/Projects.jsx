import React from "react";
import Project from "../../components/Project/Project";
import bandwich from "./images/1603235287992.png";
import quiz from "./images/1600304593493.png";
import weather from "./images/1600304651601.png";
import craving from "./images/1600809595729.png";
import burger from "./images/1604525795534.png";
import employee from "./images/1604525878229.png";

const Projects = () => {
  return (
    <>
      <Project
        title="Bandwich"
        image={bandwich}
        description="A simple 4-track recording interface built with
      collaboration in mind"
        technologies="Created using HTML, CSS, Javascript, 
        Node.js, Express.js, Handlebars, Recorder.js, MySQL, and Sequelize."
        repo="https://github.com/kreid333/bandwich/"
        deployed="https://bandwich-app.herokuapp.com/"
      />
      <br />
      <Project
        title="What I'm Craving"
        image={craving}
        description="A website that allows you to choose between different categories of 
        food and outputs both a recipe for that food category as well as a local restaurant 
        that serves food in that category"
        technologies="Created using HTML, CSS, Bootstrap, and Javascript."
        repo="https://github.com/kreid333/project-1/"
        deployed="https://kreid333.github.io/project-1/"
      />
      <br />
      <Project
        title="Weather Dashboard"
        image={weather}
        description="A weather application that displays current weather and a 5-day forecast for any city in the world"
        technologies="Created using HTML, CSS, Bootstrap, and Javascript."
        repo="https://github.com/kreid333/weather-dashboard/"
        deployed="https://kreid333.github.io/weather-dashboard/"
      />
      <br />
      <Project
        title="Employee Directory"
        image={employee}
        description="A dynamically rendered employee directory that allows 
        the user to filter by name and search for certain employees"
        technologies="Created using React"
        repo="https://github.com/kreid333/employee-directory/"
        deployed="https://kreid333.github.io/employee-directory/"
      />
      <br />
      <Project
        title="Coding Quiz Challenge"
        image={quiz}
        description="A timed, functional quiz app that dynamically cycles 
        through questions and allows the user to save their highscore after completion"
        technologies="Created using HTML, CSS, Bootstrap, and Javascript"
        repo="https://github.com/kreid333/coding-quiz-challenge/"
        deployed="https://kreid333.github.io/coding-quiz-challenge/"
      />
      <br />
      <Project
        title="Eat-Da-Burger!"
        image={burger}
        description="A simple full stack application that allows you to input burger names
         and decide if that burger has been devoured or not."
        technologies="Created using Node.js, Express.js, Handlebars, and MySQL"
        repo="https://github.com/kreid333/burger-logger/"
        deployed="https://kreid333.github.io/burger-logger/"
      />
    </>
  );
};

export default Projects;
