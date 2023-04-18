import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
  return (
    <div>
    <div >
      <div className="fullscreen-bg bg-dark p-5"><div className="content">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <h1 className="text-center">Huizenmarkt Nederland</h1>
            <hr />
          </Col>
        </Row>
      </div></div>
  </div>
  <div style={{width: '100%'}}>
    <Container style={{ color: 'black', padding: '2rem', borderRadius: '10px', marginTop: '10px'}}>
        <h1 style={{ color: 'black', textAlign: 'center' }}><b>Welkom bij onze website!</b></h1>
      <br></br>
        <blockquote class="blockquote text-center">
          <p style={{ textAlign: 'justify' }}>Ontdek actuele informatie over hypotheekrentes, huizenprijzen en uw maximale leencapaciteit in Nederland.</p>
          <p style={{ textAlign: 'justify' }}>Bereken uw hypotheekrente en leencapaciteit op basis van uw persoonlijke situatie en volg de actuele huizenprijzen en prijsontwikkelingen in uw regio.</p>
          <p style={{ textAlign: 'justify' }}>Blijf op de hoogte van de ontwikkelingen op de huizenmarkt en neem de beste financiële beslissingen voor uw situatie.</p>
        </blockquote>
      </Container>
  </div>
<br></br>
<br></br>
<br></br>

    <Container>
    <h1 style={{ color: 'black', textAlign: 'center' }}><b>Onze paginas</b></h1>
    <br></br>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <div className="image1-container" style={{width: '100%', height: '350px'}}></div>
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
            <div className="image2-container" style={{width: '100%', height: '350px'}}></div>
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
          <div className="image3-container" style={{width: '100%', height: '350px'}}></div>
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
    <br></br>
    <br></br>
    <br></br>


</div>
  );
}

export default Home;
