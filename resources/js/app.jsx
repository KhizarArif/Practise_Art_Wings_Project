import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ToastContainer } from "react-toastify";

// Frontend Style css
import "../css/Frontend/styles.css";
import "../css/Frontend/payment.css";
import "../css/Frontend/slider.css";
import "../css/Frontend/category.css";
import "../css/Frontend/addToCart.css";
import "../css/Frontend/footer.css";
import "../css/Frontend/style.css";

// Admin Style css
import "../css/Admin/app-rtl.min.css";
import "../css/Admin/app.css";
import "../css/Admin/custom.css";
import "../css/Admin/icons.min.css";
import "../css/Admin/login.css";

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
