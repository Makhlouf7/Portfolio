import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { CursorText, Linkedin, Github, Whatsapp } from "react-bootstrap-icons";
import myImage from "../assets/images/my-image.jpg";
import { easeInOut, motion } from "framer-motion";

const Banner = function () {
  const phrases = ["Web Developer", "Front-end Developer", "React Developer"];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let currentPhrase = phrases[index];
      let text = currentPhrase.slice(
        0,
        currentText.length + (isDeleting ? -1 : 1)
      );

      setCurrentText(text);

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait a bit before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to the next phrase
      }
    }, 200);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentText, isDeleting, index, phrases]);

  return (
    <section id="home" className="section">
      <Container className="banner">
        <Row className="align-items-center flex-column flex-lg-row flex-nowrap h-100 justify-content-center gap-3">
          <Col
            xs={12}
            sm={12}
            lg={6}
            className="justify-content-center order-1 order-lg-0"
          >
            <div className="d-flex flex-column gap-3">
              <h2>
                Hello, It's me <br />
                <p className="my-2">Ahmed Makhlouf</p>
                <p>
                  And I'm a{" "}
                  <span className="header-tagline">
                    {currentText}
                    <CursorText />
                  </span>
                </p>
              </h2>
              <div className="social-container d-flex gap-3">
                <a href="https://wa.me/201220064952">
                  <Whatsapp size={32} color="#00ebf7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-makhlouf-3562042b3/"
                  className="rounded-circle"
                >
                  <Linkedin size={32} color="#00ebf7" />
                </a>
                <a href="https://github.com/Makhlouf7">
                  <Github size={32} color="#00ebf7" />
                </a>
              </div>
              <div className="description-about-me mt-3">
                <p>
                  As a web developer, I am dedicated to mastering web
                  development techniques and committed to continuous learning. I
                  thrive in collaborative team environments, always eager to
                  grow and contribute.
                </p>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            lg={6}
            className="d-flex justify-content-center order-0 order-lg-1 mb-5 mb-lg-0"
          >
            <div className="profile-container">
              <motion.img
                className="profile-image"
                src={myImage}
                draggable="false"
                animate={{ y: [-20, 20, -20] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: easeInOut,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
