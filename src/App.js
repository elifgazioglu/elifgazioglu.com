import "./App.css";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";

import React, { useState } from "react";

function App() {
  const [state, setState] = useState(false);
  let url = "https://www.linkedin.com/in/elif-gazioglu";
  return (
    <div className="App">
      <div class="head-container">
        <div class="logo">
          <header class="name"> Elif Gazioglu</header>
        </div>
      </div>
      <div class="menu-container">
        <h1 class="larger-header">
          Elif
          <br />
          Gazioglu
        </h1>
        <p1>Software Developer</p1>
        <div class="icons">
          <ul class="list-inline">
            <li class="social-icons">
              <a href={url} target="_blank"><SiLinkedin></SiLinkedin></a>
            </li>
            <li class="social-icons"><SiInstagram></SiInstagram></li>
            <li class="social-icons"><SiGithub></SiGithub></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
