import React from "react";

const Project = ({title, image, description, technologies, repo, deployed}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-center">{title}</h2>
      </div>
      <div className="card-body">
        <div className="img-div">
          <img src={image} alt={title} />
        </div>
        <br />
        <p className="text-center">
          {description}
        </p>
        <p className="text-center">
          {technologies}
        </p>
        <div className="text-center">
          <a href={repo} target="_blank">
            <button className="btn btn btn-outline-dark">View Code</button>
          </a>
          <br/>
          <a href={deployed} target="_blank">
            <button className="btn btn-dark">Live Version</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
