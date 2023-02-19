/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import image1 from "./images/image1.JPG";
import image2 from "./images/image2.GIF";
import image4 from "./images/image4.png";
import image5 from "./images/image5.GIF";

function App() {
  return (
    <div class="App">
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
        <div class="about-img-container">
          <img class="image-1" src={image1} alt="Image 1"></img>
        </div>
        <div class="about-h1-p1-container">
          <h1 class="about-header">About Me</h1>
          <p1 class="about-paragraph">
            My name is Elif, and I am a second-year student studying Computer
            Engineering at Ataturk University. My passion for computer
            engineering has grown exponentially since embarking on my studies in
            this field.
            <br></br>
            <br></br>
            Throughout my academic career, I have acquired proficiency in
            several programming languages and broadened my knowledge in various
            domains. However, it is in the realm of web programming where my
            aptitude shines the most. As I set my sights on new challenges and
            objectives in this field, I invite you to join me on my journey by
            exploring my GitHub projects or downloading my updated CV.
          </p1>
          <br></br>
          <br></br>
          <a
            href="Elif Gazioglu CV.pdf"
            target="_blank"
            class="download-cv-tag"
          >
            Download My CV
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <div class="skill-container">
        <div class="skill-bar-container">
          <h1 class="skill-header">My Skills</h1>
          <div class="skill-bar">
            <div class="skill-bar-fill" style={{ width: "70%" }}>
              <span class="skill-bar-label">React.js</span>
            </div>
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill" style={{ width: "40%" }}>
              <span class="skill-bar-label">JavaScript</span>
            </div>
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill" style={{ width: "50%" }}>
              <span class="skill-bar-label">C++</span>
            </div>
          </div>
        </div>
        <img class="image-2" src={image2} alt="Image 2"></img>
      </div>
      <div class="experience-container">
        <div class="experience-h1-img">
          <h1 class="experience-header">Experience</h1>
          <img class="image-5" src={image5} alt="Image 5"></img>
        </div>
        <div class="experience-h1-p1">
          <h4>Ataturk University Data Management Office</h4>
          <img class="image-4" src={image4} alt="Image 4"></img>
          <br></br>
          <br></br>
          <p3>
            I worked part-time for one year as a computer engineering student at
            a data management office.
          </p3>
        </div>
      </div>
      <br></br>
      <div class="contact-container">
        <h1 class="contact-header">Contact Me</h1>
        <p1 class="contact-paragraph">
          Using the information below, you can get in touch with me
        </p1>
        <br></br>
        <br></br>
        <a
          class="mail-tag"
          href="mailto:elifgazioglu0@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <CiMail></CiMail>
          elifgazioglu0@gmail.com
        </a>
        <br></br>
        <a
          class="mail-tag"
          href="mailto:elifhusna.gazioglu21@ogr.atauni.edu.tr"
          target="_blank"
          rel="noreferrer"
        >
          <CiMail></CiMail>
          elifhusna.gazioglu21@ogr.atauni.edu.tr
        </a>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
