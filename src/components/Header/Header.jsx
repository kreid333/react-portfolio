import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="text-center">
          <h1>Kai Reid</h1>
          <p>Full Stack Web Developer</p>
          <div id="icons">
            <a
              href="https://github.com/kreid333"
              target="_blank"
              className="font-link"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kai-reid/"
              target="_blank"
              className="font-link"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="./assets/files/Kai Reid Resume.pdf"
              target="_blank"
              className="font-link"
            >
              <i className="fas fa-user-tie fa-2x"></i>
            </a>
          </div>
          <br/>
          <div>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/projects">Projects</Link></p>
              <p><Link to="/proficiencies">Proficiencies</Link></p>
              <p><Link to="/contact">Contact</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
