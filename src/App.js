/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import image1 from "./images/image1.JPG";
import image2 from "./images/image2.JPG";

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
            Yaşam her zaman zorlu ve değişken bir yolculuktur. Herkes kendine
            özgü zorluklarla ve fırsatlarla karşı karşıya kalır. Ancak,
            zorluklarla başa çıkmak ve fırsatları değerlendirmek için güçlü bir
            karakter ve azim gerekir. Aynı zamanda insanlar arasındaki
            bağlantılar ve destek de hayatı kolaylaştıran önemli faktörlerdir.
            <br></br>
            <br></br>
            Herkesin hayatındaki engelleri aşması ve amaçlarına ulaşması için
            yardımlaşması ve birbirlerine destek olması gerekir.
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
      <img class="image-2" src={image2} alt="Image 2"></img>
    </div>
  );
}

export default App;
