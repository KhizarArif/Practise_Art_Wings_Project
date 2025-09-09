import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { BsDash } from "react-icons/bs";
import {
    RiCheckboxMultipleBlankFill,
    RiDashboardLine,
    RiProductHuntFill,
    RiRecordCircleLine,
    RiShoppingBagFill,
    RiTruckFill,
} from "react-icons/ri";

const Sidebar = () => {
    const { props, url } = usePage();
    const user = props.auth?.user || {};

    const SidebarMenu = [
        {
            id: 1,
            title: "Dashboard",
            icon: (
                <RiDashboardLine style={{ fontSize: "24px", color: "black" }} />
            ),
            link: route("admin.dashboard"),
            tagName: "dashboard",
        },
        {
            id: 2,
            title: "Category",
            icon: (
                <RiCheckboxMultipleBlankFill
                    style={{ fontSize: "24px", color: "black" }}
                />
            ),
            link: route("categories.index"),
            tagName: "category",
        },
        {
            id: 3,
            title: "Products",
            icon: (
                <RiProductHuntFill
                    style={{ fontSize: "24px", color: "black" }}
                />
            ),
            link: route("product.index"),
            tagName: "products",
        },
        {
            id: 4,
            title: "Orders",
            icon: (
                <RiShoppingBagFill
                    style={{ fontSize: "24px", color: "black" }}
                />
            ),
            link: route("orders.index"),
            tagName: "orders",
        },
        {
            id: 5,
            title: "Shipping",
            icon: <RiTruckFill style={{ fontSize: "24px", color: "black" }} />,
            link: route("shipping.create"),
            tagName: "shipping",
        },
    ];

    const currentUrl = url.toLowerCase();


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
                        <RiRecordCircleLine
                            size={18} // same as font-size, you can adjust
                            className="align-middle text-success me-1"
                        />
                        Online
                    </span>
                </div>
            </div>

            {/* Sidebar Menu */}
            <div id="sidebar-menu">
                <ul className="list-unstyled">
                    {SidebarMenu?.map((item) => {
                        // const isActive = url.startsWith(item?.title);
                        const isActive = currentUrl.includes(item?.tagName);
                        console.log("tag Name", item?.tagName);
                        console.log("current url", currentUrl);
                        
                        return (
                            <li key={item?.id}>
                                <Link
                                    href={item?.link}
                                    className={`d-flex align-items-center text-decoration-none ${
                                        isActive ? "activeSidebar" : ""
                                    } `}
                                >
                                    <div className="me-3">{item?.icon}</div>
                                    <span>{item?.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
