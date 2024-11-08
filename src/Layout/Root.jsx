import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { Toaster } from "react-hot-toast";



const Root = () => {
    return (
        <div>
           
            <NavBar/>
            <Outlet />
            <Footer />
            
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default Root;