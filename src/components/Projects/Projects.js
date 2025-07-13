import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            My projects will appear here soon!
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leaf} // You can replace 'leaf' with your own image later
                isBlog={false}
                title="Nostalgia Time Machine"
                description="A web app to explore music, events, and cultural highlights from any year between 1980 and now. Features year selection, music discovery, historical events, archived websites, user authentication, favorites, admin panel, and more."
                ghLink="https://github.com/wolfy38/nostalgia-time-machine"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Projects;
