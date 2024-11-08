import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => (
    <Container className="my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
            {/* Contact Form */}
            <Col md={6}>
                <Form>
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group controlId="message" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Write your message" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Send Message</Button>
                </Form>
            </Col>

            {/* Contact Information */}
            <Col md={6}>
                <h5>Contact Information</h5>
                <p><FaMapMarkerAlt /> 1234 Street Name, City, Country</p>
                <p><FaPhone /> +1 (123) 456-7890</p>
                <p><FaEnvelope /> contact@example.com</p>

                {/* Social Media Links */}
                <div className="mt-3">
                    <h5>Follow Us</h5>
                    <a href="https://facebook.com" className="text-dark me-3"><FaFacebook size="1.5em" /></a>
                    <a href="https://twitter.com" className="text-dark me-3"><FaTwitter size="1.5em" /></a>
                    <a href="https://instagram.com" className="text-dark me-3"><FaInstagram size="1.5em" /></a>
                    <a href="https://linkedin.com" className="text-dark"><FaLinkedin size="1.5em" /></a>
                </div>
            </Col>
        </Row>
    </Container>
);

export default ContactUs;
