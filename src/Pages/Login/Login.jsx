import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
    const { createUserByGoogle, signInWithEmailPass } = useAuth();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLoginForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await signInWithEmailPass(email, password);
            toast.success("Welcome");

            // JWT Token
            await axios.post("https://simple-dimple-server.vercel.app/api/v1/jwt", { email }, { withCredentials: true });

            // Redirect to location or  home page
            navigate(location?.state ? location?.state : "/");

        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleGoogleLogin = () => {
        createUserByGoogle()
            .then((res) => {
                const email = res.user.email;
                axios.post("https://simple-dimple-server.vercel.app/api/v1/jwt", { email }, { withCredentials: true });

                toast.success("Welcome");
                // Redirect to location or  home page
                // navigate(location?.state ? location?.state : "/");

            })
            .catch(err => {
                toast.error(err.message);
            });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Login to Your Account</h2>
                    <p className="text-center">Please login with your email and password or continue with social media</p>

                    <Form onSubmit={handleLoginForm}>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    name='password'
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter password"
                                    required
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={togglePasswordVisibility}
                                    className="input-group-text"
                                    aria-label={passwordVisible ? "Hide password" : "Show password"}
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </div>
                            <Link to="/forget-password" className="d-block mt-2">Forgot password?</Link>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-3">
                            Login
                        </Button>

                        <p className="text-center">Or continue with:</p>
                        <div className="d-flex justify-content-between mb-4">
                            <Button onClick={handleGoogleLogin} variant="outline-danger" className="w-100 me-2">
                                <FaGoogle /> Google
                            </Button>
                        </div>

                        <p className="text-center">
                            New here? <Link to="/register">Register for new account</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
