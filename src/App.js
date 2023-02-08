/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import image1 from "./images/image1.JPG";

import React, { useState } from "react";

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <div
        class="head-container"
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}
      >
        <div class="logo">
          <header class="name">Elif Gazioglu ♡</header>
        </div>
      </div>
      <div class="menu-container">
        <h1 class="larger-header">
          Elif
          <br />
          Gazioglu
        </h1>
        <p1 class="larger-paragraph">Software Developer</p1>
        <div class="icons">
          <ul class="list-inline">
            <li>
              <a
                href="https://www.linkedin.com/in/elif-gazioglu"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin></SiLinkedin>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/elifgaziogluuu/"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram></SiInstagram>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/elifgazioglu"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub></SiGithub>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="about-container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={image1}
          alt="Image 1"
          style={{ width: "700px", height: "300px" }}
        ></img>
        <h1 class="about-header">About Me</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
