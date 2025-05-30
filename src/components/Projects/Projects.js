import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import leaf from "../../Assets/Projects/img8.png";
import emotion from "../../Assets/Projects/img1.png";
import editor from "../../Assets/Projects/img5.png";
import chatify from "../../Assets/Projects/img3.png";
import suicide from "../../Assets/Projects/img4.png";
import bitsOfCode from "../../Assets/Projects/img7.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="YT-Comment-Scraping-and-Analysis"
              description="YT Comment Scraping and Analysis is a data-driven project that focuses on extracting user comments from YouTube videos and performing analytical processing to uncover insights such as sentiment trends, frequent keywords, and audience engagement patterns. Using web scraping tools and natural language processing techniques, the project transforms raw comment data into meaningful visualizations and reports, offering valuable understanding of public opinion and content performance."
              ghLink="https://github.com/maheshreddi7/YoutubeCommentScrapingandAnalysis"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather-Dashboard"
              description="Weather Dashboard is a web application that provides real-time weather updates for any city using data fetched from a weather API. It displays current conditions such as temperature, humidity, and wind speed, along with a multi-day forecast. Designed with a user-friendly interface, the dashboard allows users to search for locations and view dynamic weather information, making it a practical tool for planning daily activities."
              ghLink="https://github.com/maheshreddi7/Weather-Dashboard"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="VanLife"
              description="VanLife is a lifestyle-focused web application designed to help users explore, book, and manage van rentals for travel adventures. It features listings of available campervans, detailed descriptions, pricing, and user reviews. The platform offers an immersive experience for those interested in mobile living or road trips, combining functionality with a clean, responsive design to make planning a van-based journey simple and enjoyable."
              ghLink="https://github.com/maheshreddi7/VanLife"
              demoLink="https://vanlifegeist.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Speech-Recognition-GEIST"
              description="Speech recognition technology enables a computer to understand and convert spoken language into text in real-time. It forms the core of the system by capturing audio input through a microphone, processing it using machine learning models or APIs like Google Speech-to-Text or Vosk, and interpreting the recognized speech to trigger corresponding computer commands. This allows users to control their system hands-free using voice commands."
              ghLink="https://github.com/maheshreddi7/Speech_Recognition_GEIST"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chief-Recipe-Ai"
              description="Chief Recipe AI is an AI-powered recipe generator that creates personalized recipes based on user-input ingredients or preferences. Built using the Hugging Face API for natural language generation, the application provides creative and accurate cooking suggestions in real-time. It combines the power of AI with an intuitive interface, making it a smart companion for home cooks looking for inspiration or meal planning ideas."
              ghLink="https://github.com/maheshreddi7/Chief-Recipe-Ai"
              demoLink="https://chiefrecepiemaker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Asur - CyberSecurity"
              description="Asur – CyberSecurity is an all-in-one cybersecurity website designed to provide tools for enhancing digital security. The platform offers a range of features including threat analysis, ethical hacking , cybersecurity news, and tools for vulnerability scanning. With a focus on both learning and practical application, Asur serves as a comprehensive hub for anyone interested in understanding and strengthening their cybersecurity knowledge and practices."
              ghLink="https://github.com/maheshreddi7/Cyber_GEIST"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
