import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" sticky="top" className="position-absolute w-100">
      <Container className="">
        <Navbar.Brand href="#home" className="px-4 py-2 bg-primary text-white">
          Binar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="ms-4" href="#home">
              Our Services
            </Nav.Link>
            <Nav.Link className="ms-4" href="#home">
              Why Us
            </Nav.Link>
            <Nav.Link className="ms-4" href="#home">
              Testimonial
            </Nav.Link>
            <Nav.Link className="ms-4" href="#home">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
