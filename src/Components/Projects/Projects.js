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
              description="Priority preemptive scheduling assigns priority levels to processes and executes the highest priority process first. It interrupts lower-priority processes to allocate the CPU to higher-priority processes, ensuring that high-priority processes receive more CPU time. However, this can cause starvation for low-priority processes."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="/priority"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Peterson Algorithm"
              description="Peterson's solution is a software-based algorithm that uses two variables to ensure mutual exclusion, allowing only one process or thread to access a critical section at a time. However, it can lead to deadlock and may require more advanced synchronization techniques."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="/peterson"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="First Come First Serve Disk Scheduling Algorithm"
              description="The FCFS disk scheduling algorithm services disk requests in the order they arrive, with the first request being served first. While simple, it can lead to longer wait times and poor performance in high workload systems. More advanced algorithms may be more appropriate."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="/fcfs"              
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Optimal Page Replacement Algorithm"
              description="The Optimal Page Replacement Algorithm aims to minimize page faults by selecting the page not used for the longest time in the future. While it provides the minimum possible number of page faults, it is not practical due to the need to predict future memory references. Other commonly used algorithms include LRU and FIFO."
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
