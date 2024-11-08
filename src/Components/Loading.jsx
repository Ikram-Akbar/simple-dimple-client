
import { motion } from 'framer-motion';
import { FaCircleNotch } from 'react-icons/fa';  
const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#f4f7fc" }} 
        >
            <motion.div
                animate={{
                    rotate: [0, 360],  
                    scale: [1, 1.2, 1],  
                }}
                transition={{
                    duration: 2,
                    loop: Infinity,
                    ease: "easeInOut",
                }}
                className="d-flex justify-content-center align-items-center"
                style={{
                    width: "80px",
                    height: "80px",
                    border: "8px solid #e0e0e0",
                    borderTopColor: "#007bff",
                    borderRadius: "50%",
                    margin: "auto",
                    boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <FaCircleNotch size={50} color="#007bff" className="spin-icon" />
            </motion.div>
        </motion.div>
    );
};

export default Loading;
