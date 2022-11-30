import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="parallax img-fluid">
        {" "}
        <Navbar collapseOnSelect expand="lg" className="fix-top">
          <Container>
            <Navbar.Brand href="#home">USquare Tech</Navbar.Brand>
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
        <div className="py-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p>ALL SOLUTION IN ONE</p>
            <h1 classNane="fs-1">Unlimited</h1>
            <h3>Advice, Tutorial, Resource</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
