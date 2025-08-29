import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ToastContainer } from "react-toastify";

// Style css
import "../css/styles.css";
import "../css/payment.css";
import "../css/slider.css";
import "../css/category.css";
import "../css/addToCart.css";
import "../css/footer.css";
import "../css/style.css";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <>
                <App {...props} />
                <ToastContainer />
            </>
        );
    },
});
