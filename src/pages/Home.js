import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="lg-6">
        <Jumbotron>
            <h1>Muhi-Dean Othman</h1>
            <h2>Determination, Integrity, Creativity</h2>
          </Jumbotron>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Home;
