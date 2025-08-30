import React from "react";

const Banners = () => {
    return (
        <>
            {/* First Banner Section */}
            <section className="section-banner-one padding-tb-50">
                <div className="container">
                    <div className="row mb-minus-24">
                        {/* Left Banner */}
                        <div
                            className="col-lg-6 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            <div className="banner-box bg-box-color-one">
                                <div className="inner-banner-box">
                                    <div className="side-image">
                                        <img
                                            src="/frontend_assets/assets/img/banner-one/one.png"
                                            alt="Snack Banner"
                                        />
                                    </div>
                                    <div className="inner-contact">
                                        <h5>Tasty Snack & Fast food</h5>
                                        <p>The flavour of something special</p>
                                        <a
                                            href="shop-left-sidebar-col-3.html"
                                            className="bb-btn-1"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Banner */}
                        <div
                            className="col-lg-6 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            <div className="banner-box bg-box-color-two">
                                <div className="inner-banner-box">
                                    <div className="side-image">
                                        <img
                                            src="/frontend_assets/assets/img/banner-one/two.png"
                                            alt="Vegetables Banner"
                                        />
                                    </div>
                                    <div className="inner-contact">
                                        <h5>Fresh Fruits & Vegetables</h5>
                                        <p>A healthy meal for every one</p>
                                        <a
                                            href="shop-left-sidebar-col-3.html"
                                            className="bb-btn-1"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Banner Section */}
            <section className="section-banner-two margin-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 banner-justify-box-contact">
                            <div className="banner-two-box">
                                <span>25% Off</span>
                                <h4>Fresh & Organic vegetables</h4>
                                <a
                                    href="javascript:void(0)"
                                    className="bb-btn-1"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banners;
