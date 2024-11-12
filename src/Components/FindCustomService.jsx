import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaQuestionCircle, FaEnvelope } from "react-icons/fa";

const FindCustomService = () => {
    return (
        <div className="w-50 mx-auto my-3 py-3 text-center">
            <h3 className="mb-3"><FaQuestionCircle className="me-2" /> Can&apos;t Find the Service You Need?</h3>
            <p className="mb-4">
                If you couldn&apos;t find exactly what you&apos;re looking for, let us know!
                We&apos;re here to offer tailored solutions just for you.
            </p>
            <div className="d-flex justify-content-center">
                <Link to="/customService">
                    <Button variant="primary" className="d-flex align-items-center">
                        <FaEnvelope className="me-2" /> Request a Custom Service
                    </Button>
                </Link>
            </div>
            <p className="mt-3 text-muted">We’re always ready to assist you with personalized services.</p>
        </div>
    );
};

export default FindCustomService;
