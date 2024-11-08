import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../../Components/Loading";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <Loading />
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace />
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
}