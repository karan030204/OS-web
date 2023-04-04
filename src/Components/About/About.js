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

function About() {
  return (
<>
    <Container fluid className="about-section">
      <NewNavbar/>
      <Container>
        <Particle/>
        

        <h1 className="project-heading">
          Languages and Frameworks we used 
        </h1>

        <Techstack />

        <h1 className="project-heading">
           Tools We used
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
      <Footer/>
      </>
  );
}

export default About;
