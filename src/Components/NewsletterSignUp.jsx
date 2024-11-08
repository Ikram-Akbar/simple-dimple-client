
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { HiAtSymbol } from "react-icons/hi";

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail('');
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Stay Updated</h2>
            <p className="text-center">Sign up for our newsletter and never miss an offer!</p>
            <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className="mr-2"
                    style={{ maxWidth: '300px' }}
                />
                <Button  type="submit" variant="outline-dark">
                    <HiAtSymbol/>  Subscribe Now
                </Button>
            </Form>
        </Container>
    );
};

export default NewsletterSignup;
