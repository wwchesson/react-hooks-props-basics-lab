import React from "react";
import Links from "./Links";

function DisplayBio(props) {
  if (props.bio) {
    return <p>{props.bio}</p>;
  } else {
    return null;
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <DisplayBio bio={props.bio} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
