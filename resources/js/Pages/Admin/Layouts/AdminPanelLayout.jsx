import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminPanelLayout = ({ children }) => {
    return (
        <div className="d-flex row">
            <div className="row">
                <Navbar />
            </div>
            <div className="d-flex flex-grow-1   overflow-hidden">
                <div
                    className="col-2  border-end" 
                >
                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className="d-flex flex-column justify-content-between">
                        <main className="flex-grow-1 p-4" style={{ overflowY: "auto" }} >{children}</main>
                        <div style={{ position: "fixed", bottom: "0", width: "83%"}}>
                            <Footer />
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelLayout;
