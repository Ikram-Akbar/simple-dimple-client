import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {FaEye,FaEyeSlash,} from "react-icons/fa";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const Register = () => {
    const { createUserByEmailPass } = useAuth();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        setError("");

        const userInfo = { name, email, phone, photoUrl, password };
        console.log(userInfo);
        createUserByEmailPass(email, password)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Check your email and verify email by given instruction",
                    icon: "success",
                }).then(() => {
                    form.reset();
                });
            })
            .catch((err) => setError(err.message));
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Create a New Account</h2>
                    <p className="text-center">
                        Fill in the details below to register or sign up using social media
                    </p>

                    {error && <p className="text-danger text-center">{error}</p>}

                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group controlId="formBasicName" className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone" className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhotoURL" className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control
                                name="photoUrl"
                                type="url"
                                placeholder="Enter your photo URL"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter password"
                                    required
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={togglePasswordVisibility}
                                    className="input-group-text"
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    name="confirmPassword"
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    required
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="input-group-text"
                                >
                                    {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-3">
                            Register
                        </Button>

                        

                        <p className="text-center">
                            Already have an account? <Link to="/login">Login here</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;