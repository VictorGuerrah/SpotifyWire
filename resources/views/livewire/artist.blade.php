<div>
    <?php

       $this->setInfo($_GET['id']);  

    ?>

    <nav  class="navbar navbar-dark" style="background-color: #000000;">
        <a class="navbar-brand pointer" wire:click="home">
            <img src="{{asset('img/logo.png')}}" width="35" height="35" class="d-inline-block align-top" loading="lazy">
            Spotify
        </a>
    </nav>

    <div class="container">
        
        @if (!empty($this->artist))
            <div class="artist">
                <div class="card a-card border-secondary" style="width: 18rem;">
                    <img class="card-img-top a-card-img-top" src="{{$this->artist['image']}}" alt="Card image cap">
                    <div class="card-body a-card-body">
                        <h5 class="card-title">{{$this->artist['name']}}</h5>
                    </div>
                </div>
            </div>

        @endif

        @if (!empty($this->albuns))

            <hr>
            <div class="tracks">
    
                    @foreach ($this->albuns as $key => $value)
    
                        <div class="track card bg-light mb-3 border-light" style="max-width: 18rem;">
                            <div class="card-header"> {{ $value['name'] }} </div>
                            <div class="card-body t-card-body">
                                <img class="card-img-top" src="{{$value['image']}}" alt="Card image cap">
                            </div>
                        </div>
    
                    @endforeach
    
            </div>

        @endif

    </div>

    <div wire:offline>
        <img src="{{asset('img/offline.png')}}" width="35" height="35" class="d-inline-block offline align-top" loading="lazy">
    </div>

</div>
