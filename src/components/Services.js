import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { CodeSlash, Layers, Globe } from "react-bootstrap-icons";
const Services = () => {
  return (
    <section id="services" className="section">
      <Container className="">
        <h2 className="section-title px-3 py-4">
          My <span>Services</span>
        </h2>
        <Row className="services-cards-container d-flex justify-content-center px-3 py-5">
          <Col className="d-flex mb-5 justify-content-center">
            <div className="services-card">
              <CodeSlash size={40} color="#00ebf7" className="mb-3" />
              <p className="services-card-title fw-bold mb-2">
                Web Development
              </p>
              <p className="services-card-text">
                Crafting responsive and dynamic web applications with clean,
                efficient, and scalable code.
              </p>
            </div>
          </Col>
          <Col className="d-flex mb-5 justify-content-center">
            <div className="services-card">
              <Layers size={40} color="#00ebf7" className="mb-3" />
              <p className="services-card-title fw-bold mb-2">MERN Expertise</p>
              <p className="services-card-text">
                Building full-stack applications with MongoDB, Express.js,
                React, and Node.js for seamless user experiences.
              </p>
            </div>
          </Col>
          <Col className="d-flex mb-5 justify-content-center">
            <div className="services-card">
              <Globe size={40} color="#00ebf7" className="mb-3" />
              <p className="services-card-title fw-bold mb-2">Web Scraping</p>
              <p className="services-card-text">
                Extracting valuable data from websites using Python-based web
                scraping techniques.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
