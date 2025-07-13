import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { motion } from "framer-motion";

function Home2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’m deeply passionate about the intersection of <b className="purple">DevOps and Web Development</b>.
                <br />
                <br />I work with technologies like
                <i>
                  <b className="purple"> React, Node.js, Python, and MongoDB.</b>
                </i>
                <br />
                <br />
                My interests lie in automating and streamlining software delivery processes using tools like{" "}
                <i>
                  <b className="purple">Docker, Jenkins, Kubernetes, Terraform</b>
                </i>, and I enjoy building scalable infrastructure on{" "}
                <i>
                  <b className="purple">AWS, Azure, and Google Cloud.</b>
                </i>
                <br />
                <br />
                I also love working on modern web applications and improving CI/CD workflows that power great user experiences.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <motion.li className="social-icons" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="https://github.com/wolfy38"
                    target="_blank"
                    rel="noreferrer"  
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </motion.li>
                <motion.li className="social-icons" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="https://x.com/dialusers"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiTwitter />
                  </a>
                </motion.li>
                <motion.li className="social-icons" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="https://www.linkedin.com/in/shlok-masani/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.li>
                <motion.li className="social-icons" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="https://www.instagram.com/luffy._.38"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </motion.li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}
export default Home2;
