import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
  return (
    <div>
    <div >
      <div class="fullscreen-bg bg-dark p-5"><div class="content">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <h1 className="text-center">Huizenmarkt Nederland</h1>
            <hr />
          </Col>
        </Row>
      </div></div>
  </div>
  <Container style={{ backgroundColor: 'grey', color: 'white', padding: '2rem', borderRadius: '10px', marginTop: '50px' }}>
    <br></br>
      <h1 style={{ color: 'black', textAlign: 'center' }}><b>Welkom bij onze website!</b></h1>
    <br></br>
      <p style={{ textAlign: 'justify' }}>Ontdek actuele informatie over hypotheekrentes, huizenprijzen en uw maximale leencapaciteit in Nederland.</p>
      <p style={{ textAlign: 'justify' }}>Bereken uw hypotheekrente en leencapaciteit op basis van uw persoonlijke situatie en volg de actuele huizenprijzen en prijsontwikkelingen in uw regio.</p>
      <p style={{ textAlign: 'justify' }}>Blijf op de hoogte van de ontwikkelingen op de huizenmarkt en neem de beste financiële beslissingen voor uw situatie.</p>
    </Container>

<br></br>
<br></br>
<br></br>

    <Container>
    <h1 style={{ color: 'black', textAlign: 'center' }}><b>Onze paginas</b></h1>
    <br></br>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
            <Card.Body>
              <Card.Title>Hypotheekrentes</Card.Title>
              <Card.Text>
                Ontdek actuele hypotheekrentes en vergelijk verschillende aanbieders.
              </Card.Text>
              <Button variant="primary" href="/hypotheekrentes">Meer informatie</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
            <Card.Body>
              <Card.Title>Huizenprijzen</Card.Title>
              <Card.Text>
                Volg de actuele huizenprijzen en prijsontwikkelingen in uw regio.
              </Card.Text>
              <Button variant="primary" href="/huizenprijzen">Meer informatie</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
            <Card.Body>
              <Card.Title>Leencapaciteit</Card.Title>
              <Card.Text>
                Bereken uw maximale leencapaciteit op basis van uw persoonlijke situatie.
              </Card.Text>
              <Button variant="primary" href="/leencapaciteit">Meer informatie</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

</div>
  );
}

export default Home;
