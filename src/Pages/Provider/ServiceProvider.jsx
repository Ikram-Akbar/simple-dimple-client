import PropTypes from "prop-types";
import { createContext, useState } from "react";


// Create a context to store service data
export const ServiceContext = createContext();



export const ServiceProvider = ({ children }) => {
    const [service, setService] = useState(null);

    return (
        <ServiceContext.Provider value={{ service, setService }}>
            {children}
        </ServiceContext.Provider>
    );
};

ServiceProvider.propTypes = {
    children: PropTypes.node,
};