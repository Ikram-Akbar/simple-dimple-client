import { Container, Row, Col, Image } from 'react-bootstrap';
import img from '../../assets/about.webp';

const AboutUs = () => (
    <Container className="my-5">
        <Row className="align-items-center">
            <Col md={6}>
                <h2>About Us</h2>
                <p>
                    We are a team of passionate professionals dedicated to delivering top-quality services to our clients.
                    Our mission is to foster a culture of excellence, integrity, and collaboration. We strive to exceed expectations
                    by offering tailored solutions to meet your unique needs.
                </p>
                <p>
                    With years of experience and a commitment to continuous improvement, we aim to be leaders in our field,
                    building lasting relationships based on trust and mutual respect.
                </p>
            </Col>
            <Col md={6}>
                <Image src={img} alt="About Us Image" fluid />
            </Col>
        </Row>
    </Container>
);

export default AboutUs;
