import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Badge, Button, Modal, Carousel } from 'react-bootstrap';

import weirdWars from './assets/Weird Wars.png'
import sokoplant from './assets/Sokoplant.png'
import lac from './assets/Little Ape Computer.png'

const ProjectsShowcase = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // REPLACE THIS WITH YOUR ACTUAL PROJECT DATA
  const projectsData = [
  {
    id: 1,
    title: "Weird Wars",
    subtitle: "Online Multiplayer Card Game",
    image: { src: weirdWars, alt: "Weird Wars Banner" },
    technologies: ["Godot", "C#", "AWS", "Client/Server"],
    description: "A multiplayer card game featuring real-time gameplay, custom deck building, and client/server architecture. Developed as my final year university project and hosted on AWS EC2.",
    features: [
      "Real-time multiplayer gameplay with WebSocket connections",
      "Custom deck builder",
      "Ranked matchmaking system with ELO ratings",
      "Cloud-based game state persistence"
    ],
    github: "https://github.com/yourusername/card-game",
    liveDemo: "http://weirdwars.net/"
  },
  {
    id: 2,
    title: "Sokoplant",
    subtitle: "The Only 100% Plant-Based Sokoban Game",
    image: { src: sokoplant, alt: "Sokoplant Banner" },
    technologies: ["HTML5", "Canvas", "JavaScript"],
    description: "A sokoban game made for Global Game Jam 2023. Made for web browsers using HTML5 canvas and written in JavaScript.",
    features: [
      "Secure bank account integration through Plaid API",
      "Automatic transaction categorization using machine learning",
      "Interactive expense and income visualizations",
      "Budget setting and tracking with notifications",
      "Investment portfolio performance tracking"
    ],
    github: "https://github.com/tupto/GGJSokoban/",
    liveDemo: "https://tupto.github.io/GGJSokoban/"
  },
  {
    id: 3,
    title: "Little Ape Computer",
    subtitle: "A homemade 16-bit computer.",
    image: { src: lac, alt: "Little Ape Computer screenshot" },
    technologies: ["Java", "Swing", "Assembly"],
    description: "A Java implementation of a custom designed 16-bit computer system.",
    features: [
      "Five general purpose registers, a stack, program counter, and bit flags.",
      "Two picture modes - indexed and direct",
      "Twenty-two opcodes, including arithmetic, logical, and branching instructions.",
      "Function calling via the PUSH, POP, RET, and branching instructions.",
      "Program interrupts.",
      "A simple BIOS including soft reset, interrupt vector, and memory copy functions."
    ],
    github: "https://github.com/tupto/LittleApeComputer",
    liveDemo: null
  }
];

  const handleShowDetails = (project) => {
    // For additional projects, find the full project in featured projects if available
    const fullProject = projectsData.find(p => p.id === project.id) || project;
    setActiveProject(fullProject);
    setShowModal(true);
  };

  return (
    <Container fluid className="py-5 bg-light">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">My Projects</h1>
          <p className="lead text-center">
            A collection of personal and professional projects showcasing my skills and interests in software development.
          </p>
        </Col>
      </Row>

      {/* Featured Projects Carousel */}
      <Row className="mb-5">
        <Col xs={12}>
          <h2 className="h4 mb-3">Featured Projects</h2>
          <Carousel className="project-carousel shadow">
            {projectsData.map((project) => (
              <Carousel.Item key={project.id}>
                <img
                  className="d-block w-100"
                  src={project.image.src}
                  alt={project.image.alt}
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={() => handleShowDetails(project)}
                    className="me-2"
                  >
                    View Details
                  </Button>
                  {project.liveDemo && (
                    <Button 
                      variant="outline-light" 
                      size="sm" 
                      href={project.liveDemo} 
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Featured Projects Cards */}
      <Row className="mb-5 g-4">
        {projectsData.map((project) => (
          <Col key={project.id} lg={4} md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={project.image.src} alt={project.image.alt} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>
                <div className="mb-3">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} bg="primary" className="me-1 mb-1">{tech}</Badge>
                  ))}
                </div>
                <Card.Text className="small">
                  {project.description.substring(0, 120)}...
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-top-0">
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={() => handleShowDetails(project)}
                  className="me-2"
                >
                  View Details
                </Button>
                {project.github && (
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    href={project.github} 
                    target="_blank"
                  >
                    <i className="bi bi-github me-1"></i> GitHub
                  </Button>
                )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Project Detail Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        {activeProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{activeProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="d-block w-100" src={activeProject.image.src} alt={activeProject.image.alt} />
              
              <h5 className="mb-3">{activeProject.subtitle}</h5>
              
              <div className="mb-3">
                <h6>Technologies:</h6>
                <div>
                  {activeProject.technologies && activeProject.technologies.map((tech, index) => (
                    <Badge key={index} bg="primary" className="me-2 mb-2">{tech}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-3">
                <h6>Description:</h6>
                <p>{activeProject.description}</p>
              </div>
              
              {activeProject.features && (
                <div className="mb-3">
                  <h6>Key Features:</h6>
                  <ul>
                    {activeProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              {activeProject.github && (
                <Button variant="outline-dark" href={activeProject.github} target="_blank">
                  <i className="bi bi-github me-1"></i> View on GitHub
                </Button>
              )}
              {activeProject.liveDemo && (
                <Button variant="primary" href={activeProject.liveDemo} target="_blank">
                  View Live Demo
                </Button>
              )}
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Custom CSS */}
      <style jsx>{`
        .project-carousel {
          border-radius: 0.5rem;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        
        .small-card {
          transition: transform 0.2s;
        }
        
        .small-card:hover {
          transform: translateY(-5px);
        }
        
        /* Add Bootstrap icons */
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
      `}</style>
    </Container>
  );
};

export default ProjectsShowcase;