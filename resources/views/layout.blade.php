<!DOCTYPE html>
<html lang="pt-BR">
<head>
     
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    {{-- Bootstrap --}}
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    
    {{-- CSS --}}
    
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    
    <title> SpotifyWire </title>

    @livewireStyles

</head>
<body class="background">


    @yield('content')

    @livewireScripts

</body>
</html>