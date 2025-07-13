import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Shlok Masani</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3></h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <motion.li className="social-icons" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://github.com/wolfy38"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </motion.li>
              <motion.li className="social-icons" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://x.com/dialusers"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </motion.li>
              <motion.li className="social-icons" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://www.linkedin.com/in/shlok-masani/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </motion.li>
              <motion.li className="social-icons" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://www.instagram.com/luffy._.38"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </motion.li>
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Footer;
