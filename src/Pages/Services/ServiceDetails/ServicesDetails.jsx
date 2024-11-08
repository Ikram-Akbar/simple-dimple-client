import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col, ListGroup, Button, Badge, Container } from "react-bootstrap";
import { FaStar, FaHome, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion"; // For smooth animations
import Loading from "../../../Components/Loading";
import { useService } from "../../Hooks/useService";

const ServicesDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {service, setService} = useService();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/v1/services/${id}`)
            .then((response) => {
                setService(response.data);
            })
            .catch((error) => {
                console.error("Error fetching service details:", error);
            });
    }, [id,setService]);

    if (!service) {
        return <Loading />;
    }

    
    const handleBackToHome = () => {
        navigate("/");
    };

    const handleBooking = () => {
        navigate(`/booking/${service._id}`);
    };

    return (
        <Container className="py-5">
            <Row className="align-items-center justify-content-center">
                <Col md={6} className="mb-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Card className="border-0 shadow-lg rounded-lg overflow-hidden">
                            <Card.Img variant="top" src={service.imageUrl} />
                            <Card.Body className="p-4">
                                <h3 className="text-primary">{service.name}</h3>
                                <p className="text-muted">{service.description}</p>
                                <Row>
                                    <Col>
                                        <h5 className="text-dark"> $ {service.price}</h5>
                                    </Col>
                                    <Col className="text-end">
                                        <Badge bg="secondary" className="fs-6">
                                            {service.rating} <FaStar />
                                        </Badge>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>

                <Col md={6} className="mb-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Card className="border-0 shadow-lg rounded-lg p-4">
                            <h5>Service Details</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>Category:</strong> {service.category}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Delivery Mode:</strong> {service.deliveryMode}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Duration:</strong> {service.duration}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Target Audience:</strong> {service.targetAudience}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Technologies:</strong> {service.technologies.join(" , ")}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Card className="border-0 shadow-lg rounded-lg mt-4 p-4">
                            <h5>Key Features</h5>
                            <ListGroup>
                                {service.features.map((feature, index) => (
                                    <div key={index} className="d-flex  align-items-center">
                                        <FaCheckCircle className="mr-2" />
                                        <ListGroup.Item  className="border-0">

                                            {feature}
                                        </ListGroup.Item>
                                    </div>
                                ))}
                            </ListGroup>
                        </Card>
                    </motion.div>
                </Col>
            </Row>

            <Row className="mt-4 justify-content-center">
                <Col md={4}>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button
                            onClick={handleBooking}
                            variant="primary"  className="w-100 shadow-lg rounded-pill mb-3">
                            <FaStar className="me-2" />
                            Book Service
                        </Button>
                    </motion.div>
                </Col>
                <Col md={4}>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button
                            variant="secondary"
                            className="w-100 shadow-lg rounded-pill"
                            onClick={handleBackToHome}
                        >
                            <FaHome className="me-2" />
                            Back to Home
                        </Button>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServicesDetails;
