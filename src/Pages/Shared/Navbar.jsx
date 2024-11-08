import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaUser } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import ProfileCard from '../../Components/ProfileCard';


const NavBar = () => {
    const { user } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Simple | Dimple</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link><FaHome /> Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link><FaInfoCircle /> About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/services">
                            <Nav.Link><FaServicestack /> Services</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link><FaEnvelope /> Contact</Nav.Link>
                        </LinkContainer>

                        {user ? (
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="link" id="profile-dropdown" className="text-white">
                                    <FaUser /> Profile
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <ProfileCard />
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <LinkContainer to="/login">
                                <Nav.Link><FaUser /> Login Now</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
