import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import NewNavbar from "../NewNavbar";
import Particle from "../Particle";
import Footer from "../Footer";
import "./About.css";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import istutiimg from "./istuti.jpg";
import manyaimg from "./manya.jpg";
import haritimg from "./harit.jpg";
import gungunimg from "./gungun.jpg";
import hetviimg from "./hetvi.jpg";
import karanimg from "./karan.jpeg";

function About() {
  return (
    <>
      <Container fluid className="about-section">
        <NewNavbar />

        <Container>
          <div className="grid  grid-cols-3 ">
            <body>
              <div class="card-container">
              <img
                  class="hero-image w-64 h-64 object-cover rounded-lg"
                  src={istutiimg}
                  alt="Spinning glass cube"
                />
                <main class="main-content">
                  <h1>Istuti Maurya</h1>
                  <p>My Role in this project was Frontend + Backend.</p>
                  <div class="flex-Row">
                    <div class="coin-base">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="Ethereum"
                        class="small-image"
                      />
                      <Link
                        to="https://github.com/IstutiMaurya"
                        target="_blank"
                        className="text-white"
                      >
                        Github
                      </Link>
                    </div>
                    <div class="time-left">
                      <img
                        src="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo.png"
                        alt="clock"
                        className="small-image"
                      />
                      <Link
                        to="https://www.linkedin.com/in/istuti-maurya-51b7b7225"
                        target="_blank"
                        className="text-white"
                      >
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </main>
              </div>
            </body>

            <body>
              <div class="card-container">
              <img
                  class="hero-image w-64 h-64 object-cover rounded-lg"
                  src={manyaimg}
                  alt="Spinning glass cube"
                />
                <main class="main-content">
                  <h1>
                    {/* <a href="#">Manya Solanki</a> */}
                    Manya Solanki
                  </h1>
                  <p>My Role in this project was Frontend + Backend.</p>
                  <div class="flex-Row">
                    <div class="coin-base">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="Ethereum"
                        class="small-image"
                      />
                      <Link
                        to="https://github.com/Manya72"
                        className="text-white"
                        target="_blank"
                         
                      >
                        Github
                      </Link>
                    </div>
                    <div class="time-left">
                      <img
                        src="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo.png"
                        alt="clock"
                        className="small-image"
                      />
                      <Link to="https://www.linkedin.com/in/manya-solanki-13b180264" className="text-white" target="_blank">
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </main>
              </div>
            </body>

            <body>
              <div class="card-container">
              <img
                  class="hero-image w-64 h-64 object-cover rounded-lg"
                  src={gungunimg}
                  alt="Spinning glass cube"
                />
                <main class="main-content">
                  <h1>
                    {/* <a href="#">Gungun Kasera</a> */}
                    Gungun Kasera
                  </h1>
                  <p>My Role in this project was Frontend + Backend.</p>
                  <div class="flex-Row">
                    <div class="coin-base">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="Ethereum"
                        class="small-image"
                      />
                      <Link
                        to="https://github.com/Gungunk27"
                        className="text-white"
                        target="_blank"
                      >
                        Github
                      </Link>
                    </div>
                    <div class="time-left">
                    <img
                        src="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo.png"
                        alt="clock"
                        className="small-image"
                      />
                      <Link to="https://www.linkedin.com/in/gungun-kasera-4a7969240" className="text-white" target="_blank">
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </main>
              </div>
            </body>

            <body>
              <div class="card-container">
              <img
                  class="hero-image w-64 h-64 object-cover rounded-lg"
                  src={hetviimg}
                  alt="Spinning glass cube"
                />
                <main class="main-content">
                  <h1>
                    {/* <a href="#">Hetvi Prajapati</a> */}
                    Hetvi Prajapati
                  </h1>
                  <p>My Role in this project was Frontend + Backend.</p>
                  <div class="flex-Row">
                    <div class="coin-base">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="Ethereum"
                        class="small-image"
                      />
                      <Link
                        to="
                        https://github.com/Hetvi2604"
                        target="_blank"
                        className="text-white" 
                      >
                        Github
                      </Link>
                    </div>
                    <div class="time-left">
                    <img
                        src="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo.png"
                        alt="clock"
                        className="small-image"
                      />
                      <Link to="https://www.linkedin.com/in/hetvi-prajapati-6a7385229" className="text-white" target="_blank">
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </main>
              </div>
            </body>

            <body>
              <div class="card-container">
              <img
                  class="hero-image w-64 h-64 object-cover rounded-lg"
                  src={haritimg}
                  alt="Spinning glass cube"
                />
                <main class="main-content">
                  <h1>
                    {/* <a href="#">Harit Dobariya</a> */}
                    Harit Dobariya
                  </h1>
                  <p>My Role in this project was Frontend + Backend.</p>
                  <div class="flex-Row">
                    <div class="coin-base">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="Ethereum"
                        class="small-image"
                      />
                      <Link
                        to="https://github.com/harit1204"
                        target="_blank"
                        className="text-white" 
                      >
                        Github
                      </Link>
                    </div>
                    <div class="time-left">
                      <img
                        src="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo.png"
                        alt="clock"
                        className="small-image"
                      />
                      <Link to="https://www.linkedin.com/in/harit-dobariya-600609224/"  className="text-white" target="_blank">
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </main>
              </div>
            </body>

            <body>
              <div class="card-container">
                <img
                  class="hero-image w-64 h-64 object-cover  rounded-lg"
                  src={karanimg}
                  alt="Spinning glass cube"
                />
                <main class="main-content">
                  <h1>
                    {/* <a href="#">Karan Dattani</a> */}
                    Karan Dattani
                  </h1>
                  <p>My Role in this project was Frontend + Backend.</p>
                  <div class="flex-Row">
                    <div class="coin-base">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="Ethereum"
                        class="small-image"
                      />
                      <Link
                        to="https://github.com/karan030204"
                        target="_blank"
                        className="text-white" 
                      >
                        Github
                      </Link>
                    </div>
                    <div class="time-left">
                      <img
                        src="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo.png"
                        alt="clock"
                        className="small-image"
                      />
                      <Link to="https://www.linkedin.com/in/karan-developer/" className="text-white"  target="_blank">
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </main>
              </div>
            </body>
          </div>
         <br/>
         <br/>
          <h1 className="project-heading">Languages and Frameworks we used</h1>

          <Techstack />

          <h1 className="project-heading">Tools We used</h1>
          <Toolstack />
          <Particle />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
