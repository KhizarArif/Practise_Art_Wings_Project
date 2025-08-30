import React from "react";
import Slider from "react-slick";

const ReviewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        pauseOnHover: true,
        swipe: true,
        draggable: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992, // md & below
                settings: { dots: false },
            },
            {
                breakpoint: 576, // xs
                settings: { dots: false, autoplaySpeed: 3200 },
            },
        ],
    };

    const slides = [
        {
            img: "/img/testimonials/1.jpg",
            name: "Isabella Oliver",
            role: "Manager",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat maiores blanditiis.",
        },
        {
            img: "/img/testimonials/2.jpg",
            name: "Nikki Albart",
            role: "Team Leader",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat maiores blanditiis.",
        },
        {
            img: "/img/testimonials/3.jpg",
            name: "Stephen Smith",
            role: "Co Founder",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat maiores blanditiis.",
        },
    ];

    return (
        <div className="review-slider-wrap">
            <Slider {...settings}>
                {slides.map((s, idx) => (
                    <div className="bb-testimonials-inner" key={idx}>
                        <div className="row g-3 align-items-center">
                            {/* Image column hidden on <768px via CSS helper */}
                            <div className="col-md-4 col-12 d-none-767">
                                <div className="testimonials-image ratio-box">
                                    <img
                                        src={s.img}
                                        alt="testimonials"
                                        className="img-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="testimonials-contact card-like">
                                    <div className="user">
                                        <img
                                            src={s.img}
                                            alt={s.name}
                                            className="avatar"
                                            loading="lazy"
                                        />
                                        <div className="detail">
                                            <h4 className="m-0">{s.name}</h4>
                                            <span className="role">
                                                ({s.role})
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inner-contact">
                                        <p className="quote">“{s.text}”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Responsive styles */}
            <style>{`
        .review-slider-wrap { width: 100%; overflow: hidden; padding: 120px; }
        @media (max-width: 1200px) { .review-slider-wrap { padding: 80px; } }
        @media (max-width: 992px) { .review-slider-wrap { padding: 56px; } }
        @media (max-width: 768px) { .review-slider-wrap { padding: 32px 20px; } }
        @media (max-width: 576px) { .review-slider-wrap { padding: 20px 14px; } }

        /* Hide helper for the left image when under 768px */
        @media (max-width: 767.98px) { .d-none-767 { display: none !important; } }

        .bb-testimonials-inner { width: 100%; }

        /* Card look for content */
        .card-like { 
          background: #fff; 
          border-radius: 18px; 
          padding: 22px; 
          box-shadow: 0 6px 24px rgba(0,0,0,.03);
        }
       

        /* Left big image keeps aspect & covers */
        .ratio-box { position: relative; width: 100%; aspect-ratio: 4 / 5; border-radius: 18px; overflow: hidden; }
        @media (max-width: 992px) { .ratio-box { aspect-ratio: 16 / 10; } }
        .img-cover { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }

        /* User row */
        .user { display: flex; align-items: center; gap: 12px; }
        .avatar { width: 54px; height: 54px; border-radius: 50%; object-fit: cover; }
        .role { color: #7a7a7a; font-size: 0.92rem; }

        .inner-contact { margin-top: 10px; }
        .quote { line-height: 1.7; margin: 0; }

        /* Slick dots spacing */
        .slick-dots { bottom: -28px; }
        .slick-dots li button:before { font-size: 10px; opacity: .45; }
        .slick-dots li.slick-active button:before { opacity: .95; }
      `}</style>
        </div>
    );
};

export default ReviewSlider;
