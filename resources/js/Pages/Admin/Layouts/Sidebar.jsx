import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { BsDash } from "react-icons/bs";
import { RiCheckboxMultipleBlankFill, RiDashboardLine, RiProductHuntFill, RiShoppingBagFill, RiTruckFill } from "react-icons/ri";

const Sidebar = () => {
    const { props } = usePage();
    const user = props.auth?.user || {}; // Assuming you pass auth.user from Laravel

    return (
        // <div className="d-flex flex-column bg-light vh-100 p-3">
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100 shadow-sm">
            {/* User details */}
            <div className="user-profile text-center mt-3">
                <div className="mb-2">{/* Add user avatar if needed */}</div>
                <div className="mt-3">
                    <h4 className="fw-semibold mb-1">{user.name}</h4>
                    <span className="text-muted">
                        <i className="ri-record-circle-line align-middle text-success me-1"></i>
                        Online
                    </span>
                </div>
            </div>

            {/* Sidebar Menu */}
            <div id="sidebar-menu" className="mt-4">
                <ul className="list-unstyled">
                    <li className="text-uppercase fw-bold text-muted mb-2">
                        Menu
                    </li>

                    <li className="mb-2">
                        <Link
                            href={route("admin.dashboard")}
                            className="d-flex align-items-center text-decoration-none"
                        >
                            {/* <i className="ri-dashboard-line me-2"></i>  */}
                            <RiDashboardLine />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link
                            href={route("categories.index")}
                            className="d-flex align-items-center text-decoration-none"
                        >
                            {/* <i className="ri-checkbox-multiple-blank-fill me-2"></i> */}
                            <RiCheckboxMultipleBlankFill />
                            <span>Category</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link
                            href={route("product.index")}
                            className="d-flex align-items-center text-decoration-none"
                        >
                            {/* <i className="ri-product-hunt-fill me-2"></i> */}
                            <RiProductHuntFill />
                            <span>Products</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link
                            href={route("orders.index")}
                            className="d-flex align-items-center text-decoration-none"
                        >
                            {/* <i className="ri-shopping-bag-fill me-2"></i> */}
                            <RiShoppingBagFill />
                            <span>Orders</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link
                            href={route("shipping.create")}
                            className="d-flex align-items-center text-decoration-none"
                        >
                            {/* <i className="ri-truck-fill me-2"></i> */}
                            <RiTruckFill />
                            <span>Shipping</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
