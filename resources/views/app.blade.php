 <!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Welcome Home</title>
        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="preload" href="/fonts/CircularStd-Bold.woff" as="font" type="font/woff" crossorigin>
        <link rel="preload" href="/fonts/CircularStd-Bold.woff" as="font" type="font/woff2" crossorigin>

        <link rel="preload" href="/fonts/CircularStd-Medium.woff" as="font" type="font/woff" crossorigin>
        <link rel="preload" href="/fonts/CircularStd-Medium.woff" as="font" type="font/woff2" crossorigin>

        <link rel="preload" href="/fonts/CircularStd-Book.woff" as="font" type="font/woff" crossorigin>
        <link rel="preload" href="/fonts/CircularStd-Book.woff" as="font" type="font/woff2" crossorigin>
       
    </head>
    <body>
        <div id="app"></div>
        <div class="loader"></div>
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="{{ asset('js/custom.js') }}"></script>
       
    </body>