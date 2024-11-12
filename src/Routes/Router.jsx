import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Services from "../Pages/Services/Services";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ServicesDetails from "../Pages/Services/ServiceDetails/ServicesDetails";
import BookingForm from "../Pages/Booking/BookingForm";
import UserBookingList from "../Pages/userBookingsList/UserBookingList";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import CustomService from "../Pages/CustomService/CustomService";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<NotFound/>,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "about",
                element:<AboutUs/>
            },
            {
                path: "services",
                element:<Services/>
            },
            {
                path: "services/:id",
                element:<ServicesDetails/>
            },
            {
                path: "booking/:id",
                element: <PrivateRoute><BookingForm /></PrivateRoute>
            },
            {
                path: "my-bookings",
                element: <PrivateRoute><UserBookingList /></PrivateRoute>
            },
            {
                path: "customService",
                element:<CustomService/>
            },
            {
                path: "contact",
                element:<ContactUs/>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
], {
    future: {
        
        v7_relativeSplatPath: true,
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
    }
});
