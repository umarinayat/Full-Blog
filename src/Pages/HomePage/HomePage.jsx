import { Container } from "react-bootstrap";

import Header from "../../Components/Header/Header";
import Portfolio from "../../Components/Portfolio/Portfolio";
const HomePage = () => {
  return (
    <>
      <Container fluid className="gx-0">
        <Header />
        <Portfolio />
      </Container>
    </>
  );
};

export default HomePage;
