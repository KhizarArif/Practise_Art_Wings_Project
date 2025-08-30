import React, { useEffect } from "react";
import FrontendLayout from "../Layouts/FrontendLayout";
import { Link } from "@inertiajs/react";
import HeroSwiper from "../components/HeroSwiper";
import NewArrivals from "../components/NewArrivals";
import Banners from "../components/Banners";
import Services from "../components/Services";

const Home = () => {
    return (
        <FrontendLayout>
            <section className="section-hero margin-b-50 next">
                <div className="container">
                    <HeroSwiper />
                </div>
            </section>
            <NewArrivals />
            <Banners />
            <Services />
        </FrontendLayout>
    );
};

export default Home;
