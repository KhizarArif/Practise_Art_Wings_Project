import React, { useEffect } from "react";
import FrontendLayout from "../Layouts/FrontendLayout";
import { Link } from "@inertiajs/react";
import HeroSwiper from "../Components/HeroSwiper";

const Home = () => {

    return (
        <FrontendLayout>
            <section className="section-hero margin-b-50 next">
                <div className="container">
                    <HeroSwiper />
                </div>
            </section>
        </FrontendLayout>
    );
};

export default Home;
