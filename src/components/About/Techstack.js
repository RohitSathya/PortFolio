import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql
} from "react-icons/di";
import { SiFirebase, SiSolidity } from "react-icons/si";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <DiJavascript1 size={40} color="#f7df1e" />
            <p className="icon-label">JavaScript</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <DiNodejs size={40} color="#3c873a" />
            <p className="icon-label">Node.js</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <DiReact size={40} color="#61dafb" />
            <p className="icon-label">React</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <SiSolidity size={40} color="#363636" />
            <p className="icon-label">Solidity</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <DiMongodb size={40} color="#4db33d" />
            <p className="icon-label">MongoDB</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <DiMysql size={40} color="#00758f" />
            <p className="icon-label">MySQL</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <DiGit size={40} color="#f34f29" />
            <p className="icon-label">Git</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <SiFirebase size={40} color="#ffcb2b" />
            <p className="icon-label">Firebase</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <DiPython size={40} color="#3776ab" />
            <p className="icon-label">Python</p>
          </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            <DiJava size={40} color="#007396" />
            <p className="icon-label">Java</p>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .tech-icons .icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          margin: 5px 0;
          text-align: center;
          transition: transform 0.3s ease;
          background-color: #f8f9fa;
          border-radius: 10px;
        }

        .tech-icons .icon-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .icon-label {
          margin-top: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }
      `}</style>
    </>
  );
}

export default Techstack;
