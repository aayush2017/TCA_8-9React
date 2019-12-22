import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import  cardImg  from '../../dist/img/01.jpg';
import  cardImg2  from '../../dist/img/02.jpg';
import  cardImg3  from '../../dist/img/03.jpg';

function Velit() {
    return (
      <div>
          <h2>Hello from Velit</h2>
          <Button variant="primary">Primary</Button>
          <Button variant="info">Info</Button>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={cardImg} alt={cardImg} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={cardImg2} alt={cardImg2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={cardImg3} alt={cardImg3} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
  export default Velit;