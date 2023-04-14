import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid className="bg-light p-5">
    <Row className="justify-content-center">
      <Col lg={6} md={8}>
        <h1 className="text-center">ReformedDegen</h1>
        <p className="lead text-center">From degenerate trades to informed investments</p>
        <hr />
        <p>Our website aims to transform visitors from "degenerate traders" into informed investors through educational content, market analysis, and portfolio management tools.</p>
        <div className="text-center">
          <Button variant="primary" className="mr-3">Learn More</Button>
          <Button variant="outline-primary">Sign Up</Button>
        </div>
      </Col>
    </Row>
  </Container>
  );
}

export default Home;
