import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ec from "../../Assets/Projects/ec.png";
import ec2 from "../../Assets/Projects/ec2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={ec2}
              isBlog={false}
              title="MernChat"
              description="With MERNchat, I've engineered a real-time messaging application leveraging the power of the MERN stack. By combining MongoDB, Express.js, React.js, and Node.js, users can engage in instant communication, exchange messages, and enjoy a fluid chat experience. This project showcases the versatility and efficiency of the MERN stack in developing interactive and responsive applications."
              ghLink="https://github.com/RohitSathya/Mern-MernChat"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec}
              isBlog={false}
              title="E-Commerce Site"
              description="I've developed an e-commerce platform using the MERN stack, seamlessly integrating MongoDB, Express.js, React.js, and Node.js to deliver a dynamic and responsive shopping experience. This comprehensive solution empowers users to browse, purchase, and manage products effortlessly while ensuring scalability and performance in a modern web environment."
              ghLink="https://github.com/RohitSathya/Mern-ECommerce"
              demoLink="https://ecomerce-foront.vercel.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
