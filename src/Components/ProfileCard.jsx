
import { Button, Card } from 'react-bootstrap';
import useAuth from '../Pages/Hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';


const ProfileCard = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut();
        navigate("/")

    }

    return (
        <Card style={{ width: '18rem',border:"none" }}>
            <Card.Img  className="w-25 rounded-circle" variant="top" src={user?.photoURL} alt="Profile" />
            <Card.Body>
                <Card.Title>{user.displayName}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Link to="/my-bookings">My Booking</Link>
                <Button variant="primary" onClick={() => { handleLogOut ()}}>Logout</Button>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
