import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import useAuth from "../Pages/Hooks/useAuth";

const CusReqForm = () => {
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, requirement, date } = e.target.elements;
        const email = user?.email;

        try {
            const response = await axios.post("http://localhost:5000/api/v1/custom-requests", {
                name: name.value,
                requirement: requirement.value,
                date: date.value,
                email,
            });
            console.log(response);
            alert("Request submitted successfully!");
        } catch (error) {
            console.error("Submission error:", error);
            alert("There was an issue submitting your request. Please try again.");
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className="m-5">
                        <h2>
                            {user?.displayName ? (
                                <span className="text-primary">{user.displayName}</span>
                            ) : (
                                "Welcome"
                            )}{" "}
                            sir, Please describe your project Requirements
                        </h2>
                        <div className="w-50 mx-auto">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="serviceCategory">
                                    <Form.Label>Service Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Specify the service name"
                                        name="name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="details">
                                    <Form.Label>Detailed Requirements</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Describe your specific needs"
                                        name="requirement"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="preferredDeadline">
                                    <Form.Label>Preferred Deadline</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        required
                                    />
                                </Form.Group>

                                <Button variant="outline-dark" className="mt-3" type="submit">
                                    Submit Request
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CusReqForm;
