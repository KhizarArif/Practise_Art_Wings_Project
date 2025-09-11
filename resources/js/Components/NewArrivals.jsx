import { Link } from "@inertiajs/react";
import React from "react";
import {
  RiHeartLine,
  RiEyeLine,
  RiRepeatLine,
  RiShoppingBag4Line,
  RiStarFill,
  RiStarLine
} from "react-icons/ri";


const NewArrivals = ({ newArrivals }) => {
    console.log("newArrivals", newArrivals);
    
    return (
        <section className="section-deal padding-tb-50">
            <div className="container">
                <div className="row">
                    {/* Section Title */}
                    <div className="col-12">
                        <div
                            className="section-title bb-deal"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="section-detail">
                                <h2 className="bb-title">
                                    New Arrival <span>Products</span>
                                </h2>
                                <p>
                                    Don't wait. The time will never be just
                                    right.
                                </p>
                            </div>
                            <div id="dealend" className="dealend-timer"></div>
                        </div>
                    </div>

                    {/* Products Slider */}
                    <div className="col-12">
                        <div className="bb-deal-slider">
                            <div className="bb-deal-block owl-carousel">
                                {newArrivals && newArrivals.length > 0 ? (
                                    newArrivals?.map((product) => (
                                        <div
                                            className="bb-deal-card"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                            data-aos-delay="200"
                                            key={product?.id}
                                        >
                                            <div className="bb-pro-box">
                                                {/* Product Image */}
                                                <div className="bb-pro-img">
                                                    <span className="flags">
                                                        <span>New</span>
                                                    </span>
                                                    <Link href="javascript:void(0)">
                                                        {product?.new_arrival_images &&
                                                            product
                                                                ?.new_arrival_images
                                                                .length > 0 && (
                                                                <div className="inner-img">
                                                                    <img
                                                                        className="main-img"
                                                                        src={`/uploads/NewArrival/${product?.new_arrival_images[0].image}`}
                                                                        alt={
                                                                            product?.title
                                                                        }
                                                                    />
                                                                    {product
                                                                        ?.new_arrival_images[1] && (
                                                                        <img
                                                                            className="hover-img"
                                                                            src={`/uploads/NewArrival/${product?.new_arrival_images[1].image}`}
                                                                            alt={
                                                                                product?.title
                                                                            }
                                                                        />
                                                                    )}
                                                                </div>
                                                            )}
                                                    </Link>

                                                    {/* Action Buttons */}
                                                    <ul className="bb-pro-actions">
                                                        <li className="bb-btn-group">
                                                            <Link
                                                                href="javascript:void(0)"
                                                                title="Wishlist"
                                                            >
                                                              <RiHeartLine />
                                                            </Link>
                                                        </li>
                                                        <li className="bb-btn-group">
                                                            <a
                                                                href="javascript:void(0)"
                                                                data-link-action="quickview"
                                                                title="Quick View"
                                                                className="quickview-btn"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#bry_quickview_modal"
                                                                data-id={
                                                                    product?.id
                                                                }
                                                                data-title={
                                                                    product?.title
                                                                }
                                                                data-description={
                                                                    product?.detail_description
                                                                }
                                                                data-image={
                                                                    product
                                                                        .new_arrival_images
                                                                        .length >
                                                                    0
                                                                        ? `/uploads/NewArrival/${product.new_arrival_images[0].image}`
                                                                        : "/frontend_assets/assets/img/product/default.jpg"
                                                                }
                                                                data-image-id={
                                                                    product
                                                                        ?.new_arrival_images
                                                                        .length >
                                                                    0
                                                                        ? product
                                                                              ?.new_arrival_images[0]
                                                                              .id
                                                                        : ""
                                                                }
                                                                data-price={
                                                                    product?.price
                                                                }
                                                                data-old-price={
                                                                    product?.original_price
                                                                }
                                                            >
                                                                <RiEyeLine />
                                                            </a>
                                                        </li>
                                                        <li className="bb-btn-group">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                              <RiRepeatLine />
                                                            </a>
                                                        </li>
                                                        <li className="bb-btn-group">
                                                            <a
                                                                href="javascript:void(0)"
                                                                title="Add To Cart"
                                                            >
                                                               <RiShoppingBag4Line />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                {/* Product Content */}
                                                <div className="bb-pro-contact">
                                                    <div className="bb-pro-subtitle">
                                                        <a href="shop-left-sidebar-col-3.html">
                                                            {
                                                                product?.category
                                                                    ?.name
                                                            }
                                                        </a>
                                                        <span className="bb-pro-rating">
                                                            <RiStarFill />
                                                           <RiStarFill />
                                                            <RiStarFill />
                                                            <RiStarFill />
                                                           <RiStarLine />
                                                        </span>
                                                    </div>

                                                    <h4 className="bb-pro-title">
                                                        <a href="product-left-sidebar.html">
                                                            {product?.title}
                                                        </a>
                                                    </h4>

                                                    <div className="bb-price">
                                                        <div className="inner-price">
                                                            <span className="new-price">
                                                                Rs.{" "}
                                                                {product?.price}
                                                            </span>
                                                            <span className="old-price">
                                                                Rs.{" "}
                                                                {
                                                                    product?.original_price
                                                                }
                                                            </span>
                                                        </div>
                                                        <span className="last-items">
                                                            {product?.qty} Pack
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No products available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
