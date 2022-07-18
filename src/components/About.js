import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Take a look at this cool GIF</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
