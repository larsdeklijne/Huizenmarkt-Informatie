import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Leencapaciteit() {
  return (
    <div>
        <div className="fullscreen-bg-huizenprijzen bg-dark p-5"><div className="content">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <h1 className="text-center">Leencapaciteit</h1>
            <hr />
          </Col>
        </Row>
      </div></div>
      <Container>
        <Row className="my-4">
          <Col>
            <h1>Leencapaciteit berekenen</h1>
            <p>
              Vul hieronder uw gegevens in om te berekenen hoeveel u maximaal kunt lenen.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formBasicIncome">
                <Form.Label>Inkomen (bruto per jaar)</Form.Label>
                <Form.Control type="number" placeholder="Vul uw inkomen in" />
              </Form.Group>
              <Form.Group controlId="formBasicExpenses">
                <Form.Label>Vaste lasten (per maand)</Form.Label>
                <Form.Control type="number" placeholder="Vul uw vaste lasten in" />
              </Form.Group>
              <Form.Group controlId="formBasicInterestRate">
                <Form.Label>Rentepercentage</Form.Label>
                <Form.Control type="number" placeholder="Vul de rente in" />
              </Form.Group>
              <br></br>
              <Button variant="primary" type="submit">
                Bereken leencapaciteit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Uw leencapaciteit:</h3>
            <p>€ 0,-</p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <h2>Wat is leencapaciteit?</h2>
            <p>
              De leencapaciteit is het bedrag dat u maximaal kunt lenen voor de aankoop van een huis. 
              De hoogte van uw leencapaciteit hangt af van verschillende factoren, zoals uw inkomen, uw vaste lasten en het rentepercentage.
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <h2>Waarom is het belangrijk om uw leencapaciteit te berekenen?</h2>
            <p>
              Het is belangrijk om uw leencapaciteit te berekenen voordat u een huis gaat kopen, omdat u hiermee voorkomt dat u te veel leent. 
              Als u meer leent dan u kunt aflossen, komt u in de financiële problemen. 
              Door uw leencapaciteit te berekenen weet u precies hoeveel u kunt lenen en voorkomt u dat u later in de problemen komt.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Leencapaciteit;
