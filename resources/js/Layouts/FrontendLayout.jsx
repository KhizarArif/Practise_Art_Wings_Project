import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const FrontendLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default FrontendLayout;
