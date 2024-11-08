
import { Row, Col, Container, Card } from 'react-bootstrap';

const Team = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Meet the Team</h2>
            <Row className="text-center">
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://placehold.co/300x300.png" />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Text>
                                CEO & Founder. Passionate about innovation and growth.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://placehold.co/300x300.png" />
                        <Card.Body>
                            <Card.Title>Jane Smith</Card.Title>
                            <Card.Text>
                                Lead Developer. Focused on creating scalable solutions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://placehold.co/300x300.png" />
                        <Card.Body>
                            <Card.Title>Mark Johnson</Card.Title>
                            <Card.Text>
                                Marketing Director. Bringing creative strategies to life.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Team;
