import { Link } from "@inertiajs/react";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import BackToTop from "../../../Components/BackToTop";

const Navbar = () => {
    return (
        <div>
            {/* <!-- Loader --> */}
            {/* <div className="bb-loader">
                <img src="/frontend_assets/assets/img/logo/loader.png" alt="loader" />
                <span className="loader"></span>
            </div> */}

            <header className="bb-header">
                <div className="bottom-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="inner-bottom-header">
                                    <div className="cols bb-logo-detail">
                                        {/* <!-- Header Logo Start --> */}
                                        <div className="header-logo">
                                            <Link href="javascript:void(0)">
                                                <img
                                                    src="/frontend_assets/assets/img/logo/logo.png"
                                                    alt="logo"
                                                    className="light"
                                                />
                                                <img
                                                    src="/frontend_assets/assets/img/logo/logo-dark.png"
                                                    alt="logo"
                                                    className="dark"
                                                />
                                            </Link>
                                        </div>
                                        {/* <!-- Header Logo End --> */}
                                    </div>

                                    <div className="cols bb-icons">
                                        <div className="bb-flex-justify">
                                            <div className="bb-header-buttons">
                                                <div className="bb-acc-drop">
                                                    <Link
                                                        href="javascript:void(0)"
                                                        className="bb-header-btn bb-header-user dropdown-toggle bb-user-toggle"
                                                        title="Account"
                                                    >
                                                        <div className="header-icon">
                                                            <FiUser
                                                                size={22}
                                                                color="#364C58"
                                                            />
                                                        </div>
                                                        <div className="bb-btn-desc">
                                                            <span className="bb-btn-title">
                                                                Account
                                                            </span>
                                                            <span className="bb-btn-stitle">
                                                                Login
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <ul className="bb-dropdown-menu">
                                                        <li>
                                                            <Link
                                                                className="dropdown-item"
                                                                href="javascript:void(0)"
                                                            >
                                                                Register
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="dropdown-item"
                                                                href="javascript:void(0)"
                                                            >
                                                                Checkout
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="dropdown-item"
                                                                href="javascript:void(0)"
                                                            >
                                                                Login
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                                {/* <!-- Wishlist Start --> */}
                                                <Link
                                                    href="wishlist.html"
                                                    className="bb-header-btn bb-wish-toggle"
                                                    title="Wishlist"
                                                >
                                                    <div className="header-icon">
                                                        <FaRegStar
                                                            size={20}
                                                            color="#364C58"
                                                        />
                                                    </div>
                                                    <div className="bb-btn-desc">
                                                        <span className="bb-btn-title">
                                                            <b className="bb-wishlist-count">
                                                                0
                                                            </b>
                                                            items
                                                        </span>
                                                        <span className="bb-btn-stitle">
                                                            Wishlist
                                                        </span>
                                                    </div>
                                                </Link>
                                                {/* <!-- Wishlist End --> */}

                                                {/* <!-- Cart Start --> */}
                                                <Link
                                                    href="javascript:void(0)"
                                                    className="bb-header-btn bb-cart-toggle"
                                                    title="Cart"
                                                >
                                                    <div className="header-icon">
                                                        <FiShoppingCart
                                                            size={22}
                                                            color="#364C58"
                                                        />
                                                        <span className="main-label-note-new"></span>
                                                    </div>
                                                    <div className="bb-btn-desc">
                                                        <span className="bb-btn-title">
                                                            <b
                                                                className="bb-cart-count"
                                                                id="navbarCartCount"
                                                            >
                                                                {/* {{ Cart::count() }} */}
                                                            </b>
                                                            items
                                                        </span>
                                                        <span className="bb-btn-stitle">
                                                            Cart
                                                        </span>
                                                    </div>
                                                </Link>
                                                {/* <!-- Cart End --> */}
                                                <a
                                                    href="javascript:void(0)"
                                                    className="bb-toggle-menu"
                                                >
                                                    <div className="header-icon">
                                                        {/* <!-- <i className="ri-menu-3-fill"></i> --> */}
                                                        <FiMenu
                                                            size={24}
                                                            color="#364C58"
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Back To Top */}
            <BackToTop />
        </div>
    );
};

export default Navbar;
