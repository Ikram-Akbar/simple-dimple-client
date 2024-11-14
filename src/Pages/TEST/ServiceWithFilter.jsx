import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form, Card, Spinner } from "react-bootstrap";
import axios from "axios";

const ServiceWithFilter = () => {
    const [services, setServices] = useState([]);
    const [allServices, setAllServices] = useState([]); // Store all fetched services
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // State for filters
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [rating, setRating] = useState("");

    // Timer ID for debounce
    const [debounceTimer, setDebounceTimer] = useState(null);

    // Fetch all services and categories
    const fetchServices = () => {
        setLoading(true);

        axios
            .get("http://localhost:5000/api/v1/services")
            .then((response) => {
                setAllServices(response.data);
                setServices(response.data); // Initially show all services
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("Failed to fetch services");
                setLoading(false);
            });
    };

    const fetchCategories = () => {
        axios
            .get("http://localhost:5000/api/v1/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((err) => {
                console.log(err);
                setError("Failed to fetch categories");
            });
    };

    // Filter services based on selected filters
    const filterServices = () => {
        let filteredServices = allServices;

        if (category) {
            filteredServices = filteredServices.filter(
                (service) => service.category.toLowerCase() === category.toLowerCase()
            );
        }

        if (minPrice) {
            filteredServices = filteredServices.filter(
                (service) => service.price >= minPrice
            );
        }

        if (maxPrice) {
            filteredServices = filteredServices.filter(
                (service) => service.price <= maxPrice
            );
        }

        if (rating) {
            filteredServices = filteredServices.filter(
                (service) => service.rating >= rating
            );
        }

        setServices(filteredServices);
    };

    // Handle filter change with debounce
    const handleFilterChange = () => {
        // Clear the previous debounce timer
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        // Set a new timer
        const timer = setTimeout(() => {
            filterServices();
        }, 500); // Debounce delay (500ms)

        setDebounceTimer(timer);
    };

    // Effect to run when any filter value changes
    useEffect(() => {
        fetchServices();
        fetchCategories();
    }, []);

    useEffect(() => {
        handleFilterChange();
    }, [category, minPrice, maxPrice, rating]);

    const clearFilters = () => {
        setCategory("");
        setMinPrice("");
        setMaxPrice("");
        setRating("");
        setServices(allServices); // Reset to all services
    };

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container className="mt-5">
            {/* Filter Section */}
            <Row className="mb-4">
                <Col md={12}>
                    <h2 className="text-center">Filter Services</h2>
                    <Form>
                        <Row className="mb-3">
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Min Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Max Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={rating}
                                        min="1"
                                        max="5"
                                        step="0.1"
                                        onChange={(e) => setRating(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <Button variant="primary" onClick={filterServices}>
                                    Apply Filters
                                </Button>{" "}
                                <Button variant="secondary" onClick={clearFilters}>
                                    Clear Filters
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

            {/* Services Display Section */}
            <h2 className="text-center mb-4">Available Services</h2>
            <Row>
                {services.length > 0 ? (
                    services.map((service) => (
                        <Col md={4} key={service._id} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>Category: {service.category}</Card.Text>
                                    <Card.Text>Price: ${service.price}</Card.Text>
                                    <Card.Text>Rating: {service.rating}</Card.Text>
                                    <Button variant="info" href={`/service/${service._id}`}>
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p className="text-center">No services found</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default ServiceWithFilter;
