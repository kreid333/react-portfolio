import React from "react";
import Project from "../../components/Project/Project";
import bandwich from "./images/1603235287992.png";

const Projects = () => {
  return (
    <Project
      title="Bandwich"
      image={bandwich}
      description="A simple 4-track recording interface built with
      collaboration in mind"
      technologies="Created using HTML, CSS, Javascript (jQuery),
      Node.js, Express.js, Handlebars, Recorder.js, MySQL, and Sequelize."
      repo="https://github.com/kreid333/bandwich"
      deployed="https://bandwich-app.herokuapp.com/"
    />
  );
};

export default Projects;
