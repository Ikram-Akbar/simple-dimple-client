import { Accordion, Card, Button } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        What is the return policy?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Our return policy allows for returns within 30 days of purchase. Items must be in original condition.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        How do I track my order?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            You can track your order using the tracking number provided in your confirmation email.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Do you offer international shipping?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            Yes, we offer international shipping to most countries. Shipping charges will vary based on the destination.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        How can I contact customer service?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            You can contact customer service by email at support@example.com or call us at (123) 456-7890.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
