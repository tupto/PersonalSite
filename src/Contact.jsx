import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import toby from './assets/Toby.jpg'

function Contact() {
    
    return (
        <section id="contact" className="pt-3">
            <Container>
                  <h2 className="text-center mb-5">Contact Me</h2>
                      <Row className="align-items-center">
                            <Col md={3} className="mb-4 mb-md-0">
                                <img src={toby} className="col-12 rounded-circle mx-auto"/>
                            </Col>
                            <Col md={9}>
                                <h3>Get In Touch</h3>
                                <p className="lead">I'd love to hear from you!</p>
                                <p>
                                    Whether you have a project in mind, a question about my work, or just want to say hello,
                                    feel free to reach out. I'm always open to discussing new projects and opportunities.
                                </p>
                                <p>
                                    You can reach me directly by email or connect with me on social media. I typically respond
                                    within 24-48 hours.
                                </p>
                                <div className="mt-4">
                                    <Button variant="primary" href="mailto:tupto50+work@gmail.com">Email Me</Button>
                                    <Link to="/about"><Button variant="outline-secondary" className="ms-3">About Me</Button></Link>
                                </div>
                                <div className="mt-4">
                                    <h4>Find me online</h4>
                                    <p>
                                        <a href="https://github.com/tupto" className="me-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        <a href="https://linkedin.com/in/toby-sawyer-799b61106/" className="me-3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </p>
                                </div>
                        </Col>
                  </Row>
            </Container>
      </section>
    )
}

export default Contact