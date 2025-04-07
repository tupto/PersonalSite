import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';

const Skills = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Nested Sets Tree Structure Optimization",
      category: "Data Structures & Algorithms",
      skills: ["PHP", "SQL", "Nested Sets", "Optimization"],
      description: "Completely reimplemented an organization structure data management system using Nested Sets, resulting in a 1400% performance improvement and enabling new node types."
    },
    {
      title: "Outlook Meeting Integration Add-in",
      category: "Programming & Software Development",
      skills: ["C#", "VSTO", "Application Programming"],
      description: "Developed an Outlook add-in to automate the inclusion of meeting feedback tools, overcoming complex race conditions to ensure reliable operation."
    },
    {
      title: "Outlook Data Collection & API Integration",
      category: "Programming & Software Development",
      skills: ["C#", "PHP", "RESTful API", "UI", "Threading", "Memory Management", "VSTO"],
      description: "Expanded the Outlook add-in to collect and upload meeting data to a custom RESTful API, implementing threading for background operations and proper COM object memory management."
    },
    {
      title: "Stripe Payments API Integration",
      category: "API Integration",
      skills: ["RESTful API", "OAuth", "Payment Processing"],
      description: "Migrated to Stripe's new Intents API, implementing OAuth authentication and Strong Customer Authentication to comply with EU regulations."
    },
    {
      title: "Security Vulnerability Assessment",
      category: "Security",
      skills: ["SQL Injection Prevention", "XSS Prevention", "Security Testing"],
      description: "Identified and patched SQL injection and XSS vulnerabilities, preventing potential data breaches and improving overall system security."
    },
    {
      title: "Cloud-Based Game Server Deployment",
      category: "Cloud Computing",
      skills: ["AWS EC2", "DNS Configuration", "Port Forwarding"],
      description: "Set up an AWS EC2 instance to host a multiplayer game server and website for user testing, including DNS routing and port configuration."
    }
  ];

  const skillCategories = {
    "Programming": ["PHP", "C#", ".NET", "C++", "ASP.NET", "SQL", "HTML", "CSS", "JavaScript", "NodeJS", "React", "Vue", "Bootstrap"],
    "Software Development": ["RESTful API", "OAuth", "Git", "Threading", "Memory Management", "Application Programming", "VSTO"],
    "Data Structures & Algorithms": ["Lists", "Trees", "Maps", "Graphs", "Searching", "Sorting", "Optimization", "Big-O Notation"],
    "Security": ["SQL Injection Prevention", "XSS Prevention", "Security Testing"],
    "Cloud & Infrastructure": ["Azure", "AWS EC2", "DNS Configuration", "Port Forwarding"]
  };

  const handleShowDetails = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <Container fluid className="py-5 bg-light col-8">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">Technical Skills & Projects</h1>
          <p className="lead text-center">
            Experienced software developer with expertise in data structures, API integration, security, and application development.
          </p>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="h4 mb-3">Core Technical Skills</h2>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="mb-3">
              <h3 className="h6 text-muted">{category}</h3>
              <div>
                {skills.map(skill => (
                  <Badge key={skill} bg="primary" className="me-2 mb-2 p-2">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </Col>
      </Row>

      {/* Project Highlights */}
      <Row className="g-4">
        <Col xs={12}>
          <h2 className="h4 mb-3">Project Highlights</h2>
        </Col>
        {projects.map((project, idx) => (
          <Col key={idx} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="h5">{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">{project.category}</Card.Subtitle>
                <div className="mb-2">
                  {project.skills.slice(0, 3).map(skill => (
                    <Badge key={skill} bg="secondary" className="me-1 small">{skill}</Badge>
                  ))}
                  {project.skills.length > 3 && <Badge bg="secondary">+{project.skills.length - 3}</Badge>}
                </div>
                <Card.Text className="small text-truncate">
                  {project.description}
                </Card.Text>
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  onClick={() => handleShowDetails(project)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Project Detail Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        {activeProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{activeProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6 className="text-muted mb-3">{activeProject.category}</h6>
              <div className="mb-3">
                {activeProject.skills.map(skill => (
                  <Badge key={skill} bg="primary" className="me-2 mb-2">{skill}</Badge>
                ))}
              </div>
              <p>{activeProject.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Skills;