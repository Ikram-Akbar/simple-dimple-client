import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-dark text-white py-4">
        <Container>
            <Row>
                {/* Company Info Section */}
                <Col md={4} className="mb-3">
                    <h5>About Us</h5>
                    <p>
                        We are dedicated to providing the best service in the industry. Our mission is to ensure customer satisfaction and quality in every aspect.
                    </p>
                </Col>

                {/* Quick Links Section */}
                <Col md={4} className="mb-3">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/home" className="text-white text-decoration-none">Home</a></li>
                        <li><a href="/about" className="text-white text-decoration-none">About</a></li>
                        <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
                        <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                    </ul>
                </Col>

                {/* Social Media Section */}
                <Col md={4} className="mb-3">
                    <h5>Connect with Us</h5>
                    <div>
                        <a href="https://facebook.com" className="text-white me-3"><FaFacebook size="1.5em" /></a>
                        <a href="https://twitter.com" className="text-white me-3"><FaTwitter size="1.5em" /></a>
                        <a href="https://instagram.com" className="text-white me-3"><FaInstagram size="1.5em" /></a>
                        <a href="https://linkedin.com" className="text-white"><FaLinkedin size="1.5em" /></a>
                    </div>
                </Col>
            </Row>
            <hr className="bg-light" />
            <div className="text-center">
                &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
            </div>
        </Container>
    </footer>
);

export default Footer;
