import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="parallax img-fluid">
        {" "}
        <Navbar collapseOnSelect expand="lg" className="fix-top">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto px-md-5 pt-md-2" id="custom-nav">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contactus">Contact us</Nav.Link>
              </Nav>
              <Nav className="pt-md-2">
                <Nav.Link href="#deets" className="custom-quote">
                  Get a Qoute
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="custom-hr"></div>
      </div>
    </>
  );
};

export default Header;
