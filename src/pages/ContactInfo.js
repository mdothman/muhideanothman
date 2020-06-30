import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const ContactInfo = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="lg-6">
        <Jumbotron>
            <h1>Muhi-Dean Othman</h1>
           <span>othmanmuhidean@gmail.com</span>
           <span></span>
          </Jumbotron>
        </Col>
        
      </Row>
    </Container>
  );
};

export default ContactInfo;