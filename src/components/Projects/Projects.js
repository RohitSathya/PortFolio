import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ec from "../../Assets/Projects/ec.png";
import ec2 from "../../Assets/Projects/ec2.png";
import ec3 from '../../Assets/Projects/ec3.png';
import ec4 from '../../Assets/Projects/ec4.png'
import ec5 from '../../Assets/Projects/ec5.webp'
import ec7 from '../../Assets/Projects/ec7.png'
import ec8 from '../../Assets/Projects/ec8.png'
import ec9 from '../../Assets/Projects/ec9.png'
import ec10 from '../../Assets/Projects/ec10.png'
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
              demoLink="https://ecomerce-mern-royo.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec3}
              isBlog={false}
              title="UrlShrinker"
              description="Experience the power of our URL shrinker website built with the MERN stack. Seamlessly shorten URLs for streamlined sharing and tracking. Our intuitive platform combines efficiency and elegance, providing a user-friendly experience. Simplify your link management and make every click count with our innovative solution."
              ghLink="https://github.com/RohitSathya/UrlShrinker"
              demoLink="https://url-shrinker-front.vercel.app/"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec4}
              isBlog={false}
              title="Sentimental Analysis"
              description="Developed sentiment analysis project using Python Flask to analyze text sentiment and provide insights for emotional understanding."
              ghLink="https://github.com/RohitSathya/SentimentalAnalysis"
              demoLink="https://sentimentalanalysis-1.onrender.com/"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec5}
              isBlog={false}
              title="Bank Management"
              description="Developed and Designed Bank Management System Application using MERN-Stack Technology."
              ghLink="https://github.com/RohitSathya/Mern_BankManagement"
              demoLink="https://mern-bank-managementfront-ckyosgqya-rohits-projects-a5c6d24a.vercel.app/"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec7}
              isBlog={false}
              title="Multi-Form Response Tracker"
              description="Multi-Form Response Tracker is a Next.js application for creating, submitting, and managing forms with features like multi-select dropdowns, real-time feedback, and local storage for seamless data collection and analysis."
              ghLink="https://github.com/RohitSathya/Next_Form"
              demoLink="https://next-form-zeta.vercel.app/"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec8}
              isBlog={false}
              title="Real Estate Management System"
              description="This is a Real Estate Management System built using the MERN stack (MongoDB, Express, React, Node.js). The system allows sellers to add properties, buyers to express interest in properties, and view details of interested users."
              ghLink="https://github.com/RohitSathya/Challenges_Presidio"
              demoLink="https://presidio-frontend.onrender.com/"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec9}
              isBlog={false}
              title="BetMaster"
              description="BetMaster is a cutting-edge sports gambling website developed using React and Tailwind CSS. The platform offers a seamless and engaging betting experience for sports enthusiasts, with a sleek, responsive design and a plethora of features that cater to both novice and seasoned bettors."
              ghLink="https://github.com/RohitSathya/sports_betting"
              demoLink="https://sports-betting-ten.vercel.app/"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec10}
              isBlog={false}
              title="MetaMask DApp - Ether Wallet Interaction"
              description="This project is a simple blockchain application that connects to MetaMask, interacts with a deployed smart contract, and allows users to view and send Ether to the contract. The project is built using React and styled with Tailwind CSS for a modern and attractive design. Toast notifications are integrated using `react-toastify` to enhance user interactions."
              ghLink="https://github.com/RohitSathya/Web3_dApp-React-/"
              demoLink="https://web3-d-app-react.vercel.app/"
            
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
