import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

import toby from './assets/Toby.jpg'

function About() {
    
    return (
        <section id="about" className="pt-3">
            <Container>
                  <h2 className="text-center mb-5">About Me</h2>
                      <Row className="align-items-center">
                            <Col md={3} className="mb-4 mb-md-0">
                                <img src={toby} className="col-12 rounded-circle mx-auto"/>
                            </Col>
                            <Col md={9}>
                                <h3>Hello, I'm Toby</h3>
                                <p className="lead">A passionate Software Engineer with expertise in full-stack development.</p>
                                <p>
                                    With over 5 years of experience in software development, I specialize in building scalable web applications and services.
                                    I enjoy working with modern technologies and frameworks to deliver high-quality, user-friendly solutions.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me 3D-modelling, painting, or gaming.
                                    I'm always eager to learn new technologies and solve challenging problems.
                                </p>
                                <div className="mt-4">
                                    <Link to="/contact"><Button variant="primary">Contact Me</Button></Link>
                                    <Button variant="outline-secondary" className="ms-3" href="resume.pdf">Download Resume</Button>
                                </div>
                        </Col>
                  </Row>
            </Container>
      </section>
    )
}

export default About