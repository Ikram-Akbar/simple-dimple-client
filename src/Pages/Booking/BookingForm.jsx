import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useService } from '../Hooks/useService';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookingForm = () => {
    const { service } = useService(); 
    const { user } = useAuth();
    // Local state to manage form data
    const [formData, setFormData] = useState({
        name: user?.displayName || '',
        email: user?.email || '',
        serviceName: service?.name || '',
        price:service?.price || 0,
        category: service?.category || '',
        deliveryMode: 'On-site', // Default delivery mode
        duration: service?.duration || '',
        technologies: service?.technologies || [],
        message: ''
    });

    // Update the form data when service changes
    useEffect(() => {
        if (service) {
            setFormData(prevState => ({
                ...prevState,
                category: service?.category,
                duration: service?.duration,
                technologies: service?.technologies
            }));
        }
    }, [service]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData(prevState => {
                const technologies = checked
                    ? [...prevState.technologies, value]
                    : prevState.technologies.filter(tech => tech !== value);
                return { ...prevState, technologies };
            });
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        axios.post("http://localhost:5000/api/v1/booking", formData)
            .then((res) => {
                console.log("Booking successful:", res.data.insertedId);
                if (res.data.insertedId) {
                    toast.success("Thank You ! booking added")
                }
            })
            .catch((err) => {
                console.log("Booking error:", err);
            });
    };

    return (
        <Container className="m-5">
            <h2 className="text-center mb-4">Book Your <span className='text-success'>{service?.name}</span> Service</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData?.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData?.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formCategory">
                            <Form.Label>Service Category</Form.Label>
                            <Form.Control
                                as="select"
                                name="category"
                                value={formData?.category}
                                onChange={handleChange}
                                disabled
                            >
                                <option>{service?.category}</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="formDeliveryMode">
                            <Form.Label>Delivery Mode</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Check
                                    type="radio"
                                    label="On-site"
                                    name="deliveryMode"
                                    value="On-site"
                                    checked={formData?.deliveryMode === 'On-site'}
                                    onChange={handleChange}
                                    className="mr-3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Remote"
                                    name="deliveryMode"
                                    value="Remote"
                                    checked={formData?.deliveryMode === 'Remote'}
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formDuration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData?.duration}
                                readOnly
                                className="bg-light"
                            />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="formName">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="000"
                                name="price"
                                defaultValue={formData?.price}
                                readOnly
                                
                            />
                        </Form.Group>
                    </Col>

                </Row>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message/Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={formData?.message}
                        onChange={handleChange}
                        placeholder="Any additional information"
                    />
                </Form.Group>

                <Button variant="outline-secondary" type="submit" className="mt-3 w-100">
                    <FaCheckCircle /> Submit
                </Button>
            </Form>
        </Container>
    );
};

export default BookingForm;
