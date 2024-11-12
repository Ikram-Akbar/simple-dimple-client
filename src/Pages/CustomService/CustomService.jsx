import CusReqForm from "../../Components/CusReqForm";
import useAuth from "../Hooks/useAuth";


const CustomService = () => {
    const { user } = useAuth();
    return (
        <div>
            {user ? (
                <CusReqForm />
            ) : (
                <p>Please log in to submit a custom request.</p>
            )}
        </div>
    );
};

export default CustomService;