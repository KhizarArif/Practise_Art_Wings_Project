import React from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    RiFullscreenLine,
    RiMenu2Line,
    RiSearchLine,
    RiShutDownLine,
} from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    const { auth } = usePage().props; // Get logged-in user from Laravel props

    return (
        <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "#fff" }}>
            <div className="d-flex">
                {/* <!-- LOGO --> */}
                <div className="navbar-brand-box">
                    {/* <Link
                        href="{ route('admin.dashboard') }"
                        className="logo logo-dark"
                    > 
                        <span className="logo-lg">
                            <span> Art Wings </span>
                             <img
                                src="/admin_assets/assets/images/logo.jpg"
                                alt="logo-sm-light"
                                height="22"
                            />
                        </span>
                    </Link> */}

                    <Link className="navbar_logo_container">
                        {/* <img src="/admin_assets/assets/images/logo.jpg" alt="Art Wings Logo" className="navbar_logo"/> */}
                        <img src="/admin_assets/assets/images/logo-light.png" alt="Art Wings Logo" className="navbar_logo"/>
                    </Link>
                  
                </div>

                <button
                    type="button"
                    className="btn btn-sm px-3 font-size-24 header-item waves-effect"
                    id="vertical-menu-btn"
                >
                    <RiMenu2Line className="align-middle" />
                </button>
            </div>

            <div className="d-flex px-4">
                <div className="dropdown d-inline-block d-lg-none ms-2">
                    <button
                        type="button"
                        className="btn header-item noti-icon waves-effect"
                        id="page-header-search-dropdown"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                      <RiSearchLine size={20} className="text-gray-600" />
                    </button>
                    <div
                        className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-search-dropdown"
                    >
                        <form className="p-3">
                            <div className="mb-3 m-0">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search ..."
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            <i className="ri-search-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="dropdown d-none d-lg-inline-block ms-1">
                    <button
                        type="button"
                        className="btn header-item noti-icon waves-effect"
                        data-toggle="fullscreen"
                    >
                        <RiFullscreenLine />
                    </button>
                </div>

                <div className="dropdown d-inline-block user-dropdown">
                    <button
                        type="button"
                        className="btn header-item waves-effect"
                        id="page-header-user-dropdown"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img
                            className="rounded-circle header-profile-user"
                            src="/admin_assets/assets/images/users/avatar-2.jpg"
                            alt="Header Avatar"
                        />
                        <span className="d-none d-xl-inline-block ms-1"> </span>
                        <MdKeyboardArrowDown className="d-none d-xl-inline-block" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      
                        <Link
                            className="dropdown-item text-danger"
                            href="{route('admin.logout') }"
                        >
                            <RiShutDownLine />
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
