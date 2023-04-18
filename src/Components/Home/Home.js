import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Footer from "../Footer";
import NewNavbar from "../NewNavbar";
import Type from "./Type";
import Projects from "../Projects/Projects";
import Particle from "../Particle";
import Chat from "../Chat";

function Home() {
  return (
    <section>
      <NewNavbar/>

      <Container fluid className="home-section" id="home">
        <Particle/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name text-xl font-light">
                Welcome to our 
                <strong className="main-name text-6xl font-bold"> OS Project</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects/>
      {/* <Home2 />  */}
      <Footer/>
    </section>
  );
}

export default Home;
