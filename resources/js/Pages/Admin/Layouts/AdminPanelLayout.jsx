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
                    style={{
                        overflowY: "auto",
                        maxHeight: "calc(100vh - 56px)",
                    }}   //remove it if not needed
                >
                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className="d-flex flex-column">
                        <main className="flex-grow-1 p-4" style={{ overflowY: "auto" }} >{children}</main>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelLayout;
