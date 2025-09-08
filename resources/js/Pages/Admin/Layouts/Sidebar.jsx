import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { BsDash } from "react-icons/bs";
import {
    RiCheckboxMultipleBlankFill,
    RiDashboardLine,
    RiProductHuntFill,
    RiShoppingBagFill,
    RiTruckFill,
} from "react-icons/ri";

const Sidebar = () => {
    const { props } = usePage();
    const user = props.auth?.user || {};

    const SidebarMenu = [
        {
            id: 1,
            title: "Dashboard",
            icon: (
                <RiDashboardLine style={{ fontSize: "20px", color: "blue" }} />
            ),
            link: route("admin.dashboard"),
        },
        {
            id: 2,
            title: "Category",
            icon: (
                <RiCheckboxMultipleBlankFill
                    style={{ fontSize: "20px", color: "blue" }}
                />
            ),
            link: route("categories.index"),
        },
        {
            id: 3,
            title: "Products",
            icon: (
                <RiProductHuntFill
                    style={{ fontSize: "20px", color: "blue" }}
                />
            ),
            link: route("product.index"),
        },
        {
            id: 4,
            title: "Orders",
            icon: (
                <RiShoppingBagFill
                    style={{ fontSize: "20px", color: "blue" }}
                />
            ),
            link: route("orders.index"),
        },
        {
            id: 5,
            title: "Shipping",
            icon: <RiTruckFill style={{ fontSize: "20px", color: "blue" }} />,
            link: route("shipping.create"),
        },
    ];

    return (
        // <div className="d-flex flex-column bg-light vh-100 p-3">
        <div
            className="d-flex flex-column flex-shrink-0 p-3 vh-100 shadow-sm"
            style={{ backgroundColor: "#fff" }}
        >
            {/* User details */}
            <div className="user-profile text-center mt-3">
                <div>{/* Add user avatar if needed */}</div>
                <div className="mt-3">
                    <h4 className="fw-semibold mb-1">{user?.name}</h4>
                    <span className="text-muted">
                        <i className="ri-record-circle-line align-middle text-success me-1"></i>
                        Online
                    </span>
                </div>
            </div>

            {/* Sidebar Menu */}
            <div id="sidebar-menu">
                <ul className="list-unstyled">
                    {SidebarMenu?.map((item) => (
                        <li key={item?.id}>
                            <Link
                                href={item?.link}
                                className="d-flex align-items-center text-decoration-none"
                            >
                                <div className="me-3">{item?.icon}</div>
                                <span>{item?.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
