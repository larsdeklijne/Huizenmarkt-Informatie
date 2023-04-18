import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Hypotheekrentes() {
  return (
    <div>
      <div className="fullscreen-bg-huizenprijzen bg-dark p-5"><div className="content">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <h1 className="text-center">Hypotheekrentes</h1>
            <hr />
          </Col>
        </Row>
      </div></div>
      <Container>
        <Row>
          <Col>
            <h1>Hypotheekrentes</h1>
            <p>Hypotheekrentes zijn de rentes die je betaalt over je hypotheeklening. Deze rentes kunnen verschillen per bank en per type hypotheek.</p>
            <p>Het is belangrijk om goed te kijken naar de verschillende hypotheekrentes en de bijbehorende voorwaarden, zodat je de juiste keuze kunt maken voor jouw situatie.</p>
            <p>Op deze pagina vind je informatie over de actuele hypotheekrentes en waar je rekening mee moet houden bij het kiezen van een hypotheek.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hypotheekrentes;
