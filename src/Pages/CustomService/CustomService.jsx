import { Link } from "react-router-dom";
import CusReqForm from "../../Components/CusReqForm";
import useAuth from "../Hooks/useAuth";
import { Button } from "react-bootstrap";


const CustomService = () => {
    const { user } = useAuth();
    return (
        <div>
            {user ? (
                <CusReqForm />
            ) : (
                    <div className="m-5 p-5 text-center">
                        <p className="fw-bold fs-5 ">Please log in to submit a custom request.</p>
                        <Button as={Link} to="/login" className="outline-dark">Login Now</Button>
                    </div>
            )}
        </div>
    );
};

export default CustomService;