import React from "react";
import img from "../images/fdj.png";


const Top = () => {
  return (
    <>
      <div className="top-box">
        <img src={img} alt="HEY" />
        <div className="content">
          <h2>I'm Abhinav</h2>
          <h3>
          I am currently pursuing my Bachelor of Engineering in Computer Science at Canara Engineering College. I have a passion for knowledge, learning, and growth, and I have participated in several programming courses to enhance my skills and understanding. I am interested in backend web development, and I am working on my own projects using Javascript. I hope to complete an internship next year that will provide me with real-life experience and important technological skills.
          </h3>
          <button className="btn"><a href="#contact">Contact</a></button>
        </div>
      </div>
    </>
  );
};

export default Top;
