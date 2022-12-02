import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";
import p1 from "../../assets/p1.jpeg";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";

const Portfolio = () => {
  return (
    <Container className="p-4">
      <h1 className="text-center">Our Projects</h1>
      <Row id="portfolio-img">
        <Col className="custom-card-portfolio">
          <img src={p1} alt="image 1" className="col-lg-6 col-sm-12" />
          <img src={p2} alt="image 1" className="col-lg-6 col-sm-12" />
          <img src={p3} alt="image 1" className="col-lg-6 col-sm-12" />
          <img src={p4} alt="image 1" className="col-lg-6 col-sm-12" />
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
