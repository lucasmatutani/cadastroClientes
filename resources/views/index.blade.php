<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Cadastro de Cliente</title>
    </head>
    <body class="antialiased">
        <div id="registerCustomer"></div>
        <div id="searchCustomer"></div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>

<style>
    #registerCustomer{
        border: 1px solid #000;
        padding: 20px;
        margin: 50px 80px;
        border-radius: 30px;
    }

    #searchCustomer{
        border: 1px solid #000;
        padding: 20px;
        margin: 50px 80px;
        border-radius: 30px;
    }
</style>