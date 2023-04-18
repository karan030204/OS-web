import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Footer from "../Footer";
import NewNavbar from "../NewNavbar";
import Type from "./Type";
import Projects from "../Projects/Projects";
import Particle from "../Particle";
import * as THREE from "three";
import { Globe } from "./Globe";

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const globe = new Globe();
    scene.add(globe);

    camera.position.z = 5;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      globe.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section>
      <NewNavbar />
      <Container fluid className="home-section" id="home">
        <Particle />
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
                Welcome to our{" "}
                <strong className="main-name text-6xl font-bold">OS Project</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div ref={containerRef}></div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects />
      {/* <Home2 />  */}
      <Footer />
    </section>
  );
}

export default Home;
