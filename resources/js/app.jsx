import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ToastContainer } from "react-toastify";

// Style css
import "../../frontend_assets/assets/css/styles.css";
import "../../frontend_assets/assets/css/payment.css";
import "../../frontend_assets/assets/css/slider.css";
import "../../frontend_assets/assets/css/category.css";
import "../../frontend_assets/assets/css/addToCart.css";
import "../../frontend_assets/assets/css/footer.css";
import "../../frontend_assets/assets/css/style.css";

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
