import React from "react"; 
import ReviewSlider from './ReviewSlider';

export default function Testimonials() {
    return (
        <section className="section-testimonials padding-tb-100 p-0-991">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bb-testimonials">
                            <img
                                src="/img/testimonials/img-1.png"
                                alt="testimonials-1"
                                className="testimonials-img-1"
                            />
                            <img
                                src="/img/testimonials/img-2.png"
                                alt="testimonials-2"
                                className="testimonials-img-2"
                            />
                            <img
                                src="/img/testimonials/img-3.png"
                                alt="testimonials-3"
                                className="testimonials-img-3"
                            />
                            <img
                                src="/img/testimonials/img-4.png"
                                alt="testimonials-4"
                                className="testimonials-img-4"
                            />
                            <img
                                src="/img/testimonials/img-5.png"
                                alt="testimonials-5"
                                className="testimonials-img-5"
                            />
                            <img
                                src="/img/testimonials/img-6.png"
                                alt="testimonials-6"
                                className="testimonials-img-6"
                            />
                            <div className="inner-banner">
                                <h4>Testimonials</h4>
                            </div>
                            <div className="testimonials-slider">
                                <ReviewSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
