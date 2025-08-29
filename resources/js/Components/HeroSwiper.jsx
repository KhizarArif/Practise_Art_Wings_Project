import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
    {
        id: 1,
        smallText: "Flat 30% Off",
        titleLine1: "Explore ",
        titleSpan: "Healthy",
        titleLine2: "& Fresh Fruits",
        img: "/frontend_assets/assets/img/hero/hero-1.png",
    },
    {
        id: 2,
        smallText: "Flat 20% Off",
        titleLine1: "Explore ",
        titleSpan: "Warm",
        titleLine2: "Fast Food & Snacks",
        img: "/frontend_assets/assets/img/hero/hero-2.png",
    },
    {
        id: 3,
        smallText: "Flat 30% Off",
        titleLine1: "Explore ",
        titleSpan: "Organic",
        titleLine2: "& Fresh Vegetables",
        img: "/frontend_assets/assets/img/hero/hero-3.png",
    },
];

export default function HeroSwiper() {
    return (
        <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="hero-slider"
        >
            {slides.map((s) => (
                <SwiperSlide key={s.id}>
                    <div className="row mb-minus-24">
                        <div className="col-lg-6 col-12 order-lg-1 order-2 mb-24">
                            <div className="hero-contact">
                                <p>{s.smallText}</p>
                                <h1>
                                    {s.titleLine1}
                                    <span>{s.titleSpan}</span>
                                    <br />
                                    {s.titleLine2}
                                </h1>
                                <a
                                    href="#"
                                    className="bb-btn-1"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 order-lg-2 order-1 mb-24">
                            <div className="hero-image">
                                <img src={s.img} alt={`hero-${s.id}`} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
