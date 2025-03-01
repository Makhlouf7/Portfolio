import React, { useState, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
// Control which text will be visible in the main card
let currentIndex = -1;

const About = function () {
  const aboutMe = [
    {
      title: "Hello, I'm Ahmed!",
      text: "A passionate CS student with a love for coding and problem-solving.",
    },
    {
      title: "Tech Stack & Skills",
      text: "Skilled in MongoDB, Express.js, React, and Node.js. Experienced in building full-stack applications with RESTful APIs and Server-Side Rendering (SSR).",
    },
    {
      title: "Building & Collaborating",
      text: "Developed full-stack web apps using the MERN stack, automated data collection with Python web scraping, worked on projects within teams, and gained experience as a freelance developer.",
    },
    {
      title: "How I Work",
      text: "I believe in clean, scalable code, continuous learning, and collaborating with others to build impactful solutions.",
    },
    {
      title: "Lessons from the Journey",
      text: "From debugging tough issues to optimizing performance, every challenge has been a step toward becoming a better developer.",
    },
    {
      title: "What's Next?",
      text: "Aiming to master full-stack performance optimization and dive deeper into AI & machine learning.",
    },
  ];
  const [cards, setCards] = useState([
    { title: "Click me", text: "Keep clicking me 😊" },
    "",
    "",
    "",
    "",
    "",
  ]);
  const handleClick = (e) => {
    currentIndex = currentIndex == aboutMe.length - 1 ? 0 : currentIndex + 1;
    const clickedCard = e.currentTarget;
    clickedCard.classList.add("about-disappear");
    console.log(currentIndex);
    setTimeout(() => {
      setCards((prevCards) => {
        prevCards[0] = aboutMe[currentIndex];
        return [...prevCards];
      });
      // Remove the animation class for future clicks
      clickedCard.classList.remove("about-disappear");
    }, 1000); // Match with the css transition
  };

  return (
    <section id="about" className="section">
      <Container>
        <Row>
          <Col className="col-12 p-3">
            <h2 className="mb-3 text-center">About me</h2>
            <div className="about-cards-container">
              {cards.map((card, index) => {
                return (
                  <div
                    key={index}
                    onClick={(e) => handleClick(e)}
                    className="about-card"
                    style={{
                      zIndex: `${-index}`,
                      transform:
                        index % 2
                          ? `translateX(-50%) rotate(-${3 * (index - 1)}deg)`
                          : `translateX(-50%) rotate(${3 * index}deg)`,
                    }}
                  >
                    <p className="fw-bold text-center about-card-title">
                      {card.title}
                    </p>
                    <p className="about-card-text">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
