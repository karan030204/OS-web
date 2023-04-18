import React, { useEffect, useRef, useState, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Footer from "../Footer";
import NewNavbar from "../NewNavbar";
import Type from "./Type";
import Projects from "../Projects/Projects";
import Particle from "../Particle";
import * as THREE from "three";
import { Globe } from "./Globe";
import "./Home.css";
import { useLoader, useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "react-spring";

import Chat from "../Chat";

function Home() {
  const springAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { duration: 2000 },
  });

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



  /* Adding three js component */

    const GLTFModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => (ref.current.rotation.y += 0.003));
    return (
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={hovered ? scale * 0.03 : scale * 0.025}
        position={position}
        onMouseOver={(e) => setHovered(true)}
        onMouseOut={(e) => setHovered(false)}
      />
    );
  };
  const ModelViewer = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    return (
      <Suspense>
        <GLTFModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    );
  };
  return (
    <>
    <section>
      <NewNavbar/>

      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
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
                <strong className="main-name text-6xl font-bold">
                  OS Project
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div ref={containerRef}></div>
            </Col>
          </Row>
          <animated.div className="threed-section"style={springAnimation} >
            <div className="canvas-wrapper">
              <Canvas camera={{ position: [10, 25, 10] }}>
                <OrbitControls />
                <ambientLight intensity={1.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[10, 10, 10]} />
                <ModelViewer modelPath="./earthquakes1.glb" />
              </Canvas>
            </div>
          </animated.div>
        </Container>
      </Container>
      <Projects />
      {/* <Home2 />  */}
      <Footer />
      </section>
      </>

  );
}



export default Home;
