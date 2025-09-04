<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Frontend  -->
    <link href="/frontend_assets/assets/css/vendor/bootstrap.min.css">
    <link href="/frontend_assets/assets/css/vendor/remixicon.css">
    <link href="/frontend_assets/assets/css/vendor/aos.css">
    <link href="/frontend_assets/assets/css/vendor/swiper-bundle.min.css">
    <link href="/frontend_assets/assets/css/vendor/owl.carousel.min.css">
    <link href="/frontend_assets/assets/css/vendor/slick.min.css">
    <link href="/frontend_assets/assets/css/vendor/animate.min.css">
    <link href="/frontend_assets/assets/css/vendor/jquery-range-ui.css">

    @viteReactRefresh
    @routes
    @vite('resources/js/app.jsx')
    @inertiaHead

</head>

<body>
    @inertia

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Toaster  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

    <!-- New Design js Start  -->
    <!-- Frontend JS -->
    <script src="{{ asset('frontend_assets/assets/js/vendor/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/jquery.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/jquery.zoom.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/aos.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/smoothscroll.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/slick.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/jquery-range-ui.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/vendor/tilt.jquery.min.js') }}"></script>
    <script src="{{ asset('frontend_assets/assets/js/main.js') }}"></script>

    <!-- Admin js -->
    <!-- Plugins js -->
    <script src="{{ asset('admin_assets/assets/js/pages/dashboard.init.js') }}"></script>
    <script src="{{ asset('admin_assets/assets/js/app.js') }}"></script>

</body>

</html>