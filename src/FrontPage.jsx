import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa'
import { Link } from 'react-router'

import sokoplant from './assets/Sokoplant.png'
import weirdWars from './assets/Weird Wars.png'

function FrontPage() {
    
    return (
        <section id="home" className="bg-secondary text-white text-center min-vh-100 d-flex align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md={10} lg={8}>
                  <h1 className="display-2 fw-bold mb-3">Toby Sawyer</h1>
                  <h2 className="h3 mb-4">Software Engineer, Full-Stack Developer, and Technomancer</h2>
                  <p className="lead mb-5">I commune with machines.</p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link to="/projects"><Button variant="light" size="lg">View My Work</Button></Link>
                    <Link to="/contact"><Button variant="outline-light" size="lg">Get In Touch</Button></Link>
                  </div>
                  <div className="mt-5 d-flex justify-content-center gap-4">
                    <a href="https://github.com/tupto" className="text-white fs-3"><FaGithub /></a>
                    <a href="https://linkedin.com/in/toby-sawyer-799b61106/" className="text-white fs-3"><FaLinkedin /></a>
                    <a href="mailto:email@example.com" className="text-white fs-3"><FaEnvelope /></a>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
    )
}

export default FrontPage