import React from "react";

const Home = () => {
  return (
    <>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center">About me</h2>
            </div>
            <div class="card-body">
              <p>
                Hello! My name is Kai Reid. I am 19 years old and was born and
                raised in Savannah, Georgia. I have an absolute love for coding
                and currently attend Georgia Tech's Full Stack Coding Bootcamp.
                A few things I like to do in my free time is make music
                instrumentals, skateboard, and, of course, code. With my growing
                knowledge of coding, I plan on helping people develop software
                and websites that will assist with growing their business and/or
                personal brand.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center">Proficiencies</h2>
            </div>
            <div class="card-body">
              <div class="text-center">
                <i class="fab fa-git-alt fa-3x"></i>
                <i class="fab fa-html5 fa-3x"></i>
                <i class="fab fa-css3 fa-3x"></i>
                <i class="fab fa-bootstrap fa-3x"></i>
                <i class="fab fa-js-square fa-3x"></i>
                <i class="fab fa-node-js fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
