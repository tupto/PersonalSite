import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router'

function Navigation() {
    function navClassName(isActive) {
        isActive ? "nav-link active text-uppercase" : "nav-link link-light text-lowercase"
    }
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                  <Navbar.Brand href="#home">Toby Sawyer</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                            <Nav.Link as={NavLink} to='/skills'>Skills</Nav.Link>
                            <Nav.Link as={NavLink} to='/projects'>Projects</Nav.Link>
                            <Nav.Link as={NavLink} to='/experience'>Experience</Nav.Link>
                            <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
                        </Nav>
                  </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation