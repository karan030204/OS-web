import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import NewNavbar from "../NewNavbar";
import Particle from "../Particle";
import Footer from "../Footer";

function Projects() {
  return (
    <>
    <Container fluid className="project-section">
      <Particle/>
      <NewNavbar/>
      <Container>
        <h1 className="project-heading">
          OUR <strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Priority Preemptive Scheduling"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="/priority"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Peterson Algorithm"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="/peterson"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="First Come First Serve Disk Scheduling Algorithm"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="/fcfs"              
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Optimal Page Replacement Algorithm"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="/opr"
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Projects;
