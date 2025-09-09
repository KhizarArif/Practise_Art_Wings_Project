import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminPanelLayout = ({ children }) => {
    return (
        <div className="d-flex flex-column" style={{ height: "100vh", backgroundColor: "#f2f2f2" }}>
            
            {/* Navbar - Fixed at top */}
            <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
                <Navbar />
            </div>

            <div className="d-flex flex-grow-1" style={{ marginTop: "60px" }}> 
                
                {/* Sidebar - Fixed & Scrollable (Scrollbar Hidden) */}
                <div
                    style={{
                        position: "fixed",
                        top: "60px",
                        bottom: "40px",
                        left: 0,
                        width: "250px",
                        borderRight: "1px solid #ddd",
                        overflowY: "auto",
                        backgroundColor: "#fff",

                        /* HIDE SCROLLBAR */
                        scrollbarWidth: "none", // Firefox
                        msOverflowStyle: "none", // IE & Edge
                    }}
                    className="hide-scrollbar"
                >
                    <Sidebar />
                </div>

                {/* Main Content - Scrollable */}
                <div
                    style={{
                        marginLeft: "250px",
                        marginTop: "30px",
                        padding: "20px",
                        flexGrow: 1,
                        overflowY: "auto",
                        height: "calc(100vh - 100px)",
                    }}
                >
                    {children}
                </div>
            </div>

            {/* Footer - Fixed */}
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: "250px",
                    right: 0,
                    height: "40px",
                    backgroundColor: "#fff",
                    borderTop: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Footer />
            </div>
        </div>
    );
};

export default AdminPanelLayout;
