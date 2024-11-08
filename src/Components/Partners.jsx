
import { Row, Col, Container } from 'react-bootstrap';

const Partners = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Trusted by Leading Companies</h2>
            <Row className="justify-content-center">
                <Col md={3} className="text-center mb-3">
                    <img src="https://placehold.co/150x50.png" alt="Logo 1" className="img-fluid" />
                </Col>
                <Col md={3} className="text-center mb-3">
                    <img src="https://placehold.co/150x50.png" alt="Logo 2" className="img-fluid" />
                </Col>
                <Col md={3} className="text-center mb-3">
                    <img src="https://placehold.co/150x50.png" alt="Logo 3" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Partners;
