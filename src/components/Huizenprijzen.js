import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Huizenprijzen() {
  return (
    <div>
      <div className="fullscreen-bg-huizenprijzen bg-dark p-5"><div className="content">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <h1 className="text-center">Huizenprijzen</h1>
            <hr />
          </Col>
        </Row>
      </div></div>
      <Container>
        <Row className="my-4">
          <Col>
            <h1>Huizenprijzen in Nederland</h1>
            <p>
              Op deze pagina vindt u informatie over de huizenprijzen in Nederland.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Gemiddelde huizenprijs</Card.Title>
                <Card.Text>
                  De gemiddelde huizenprijs in Nederland is in de afgelopen jaren gestegen. Bekijk hier de actuele cijfers.
                </Card.Text>
                <Button variant="primary">Bekijk cijfers</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Huizenprijzen per regio</Card.Title>
                <Card.Text>
                  De huizenprijzen verschillen per regio. Bekijk hier welke regio's het duurst zijn.
                </Card.Text>
                <Button variant="primary">Bekijk regio's</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Huizenprijzen voorspelling</Card.Title>
                <Card.Text>
                  Wat gaat er gebeuren met de huizenprijzen in de toekomst? Lees hier de voorspellingen van experts.
                </Card.Text>
                <Button variant="primary">Bekijk voorspellingen</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Huizenprijzen;