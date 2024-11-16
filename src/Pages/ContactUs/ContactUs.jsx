import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const { user } = useAuth();
    const navigate = useNavigate();


    const handleContactForm = async (e) => {
        e.preventDefault();
        const { name, email, message } = e.target.elements;

        try {
            await axios.post("https://simple-dimple-server.vercel.app/api/v1/contactEmail", {
                clientName: name.value,
                clientEmail: email.value,
                message: message.value,
            })
                .then((res) => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success("Thank You , We will contact with you very soon !! ");
                        return navigate("/")
                    }
                })


        } catch (err) {

            toast.error(err);
        }
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Row>
                {/* Contact Form */}
                <Col md={6}>
                    <Form onSubmit={handleContactForm}>
                        <Form.Group controlId="name" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required name="name" type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="email" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                defaultValue={user?.email || ''}
                                readOnly={!!user}
                            />
                        </Form.Group>
                        <Form.Group controlId="message" className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control required name="message" as="textarea" rows={4} placeholder="Write your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Send Message</Button>

                    </Form>
                </Col>

                {/* Contact Information */}
                <Col md={6}>
                    <h5>Contact Information</h5>
                    <p><FaMapMarkerAlt /> Uttaar Bazar, Laksham, Cumilla - 3500</p>
                    <p><FaPhone /> +88 01985934897</p>
                    <p><FaEnvelope /> Ikramhossain850@gmail.com</p>

                    {/* Social Media Links */}
                    <div className="mt-3">
                        <h5>Follow Us</h5>
                        <a href="https://facebook.com" className="text-dark me-3"><FaFacebook size="1.5em" /></a>
                        <a href="https://twitter.com" className="text-dark me-3"><FaTwitter size="1.5em" /></a>
                        <a href="https://linkedin.com" className="text-dark"><FaLinkedin size="1.5em" /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
