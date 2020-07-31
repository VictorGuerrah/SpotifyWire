<div>
    <nav  class="navbar navbar-dark" style="background-color: #000000;">
        <a class="pointer navbar-brand">
            <img src="{{asset('img/logo.png')}}" width="35" height="35" class="d-inline-block align-top" loading="lazy">
            <span>Spotify</span> 
        </a>
        <form class="form-inline" wire:submit.prevent="submit">
            <input wire:offline.attr="disabled" wire:loading.attr="disabled" wire:target="submit, albuns" class="form-control mr-sm-2" type="search" wire:model="value" placeholder="Search" aria-label="Search" required>
            <button wire:offline.attr="disabled" wire:loading.attr="disabled" wire:target="submit, albuns" class="btn btn-outline-success my-2 my-sm-0">
                <span wire:loading.remove wire:target="submit, albuns">Buscar</span>     
                <div> 
                    <span wire:loading wire:target="submit, albuns" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </div>
            </button>
        </form>
    </nav>
    @error('name') <span class="error">{{ $message }}</span> @enderror
    
    <div class="container">
        @if (!empty($artists))
            
        <div class="card-deck scroll artists">
                <div class="row">
        
                    @foreach ($artists as $key => $value)
                    
                        <div class="card a-card border-secondary" style="width: 18rem;">
                            <img class="card-img-top a-card-img-top" src="{{$value['image']}}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title a-card-name pointer" wire:click="albuns('{{$value['id']}}')">{{$value['name']}}</h5><br>
                                <svg onclick="liked('<?= addslashes($value['name']) ?>', '<?= $value['image']?>')" width="1em" height="1em" viewBox="0 0 16 16" class="liked bi bi-heart pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                  </svg>
                            </div>
                        </div>
                        
                        @endforeach
                        
                </div>
            </div>
        
        @endif
        
        
        @if (!empty($tracks))
            <div class=" tracks">
        
                    @foreach ($tracks as $key => $value)
        
                    <div class="track card bg-light mb-3 border-light" style="max-width: 18rem;">
                        <div class="card-header"> {{ $value['name'] }} </div>
                        <div class="card-body t-card-body">
                            <img class="card-img-top" src="{{$value['image']}}" alt="Card image cap">
                        </div>
                        <h6 class="card-text">{{ $value['artist'] }}</h6>
                    </div>
                    @endforeach
        
            </div>
        
        @endif

        {{-- <hr>
        <div class="container">
            <h3 class="center">Favoritos</h3>
            <span onclick="getFavs()">att</span>
            <div class="avatares">
                <div class="avatar">
                    <img class="card-img-top avatar-img" src="https://i.scdn.co/image/ab67616d0000b2734c6b8c0dc1ed7c49590339c8" alt="Card image cap">
                    <h6>Caio Correia</h6>
                </div>
            </div>
        </div> --}}

    </div>

    <div wire:offline>
        <img src="{{asset('img/offline.png')}}" width="35" height="35" class="d-inline-block offline align-top" loading="lazy">
    </div>
    
</div>

<script>

    function liked(name, image)
    {   
        let fav = localStorage.getItem('artista')

        if(!fav){
            fav = []
        } else {
            fav = JSON.parse(fav)
        }

        fav.push({
            name:name, 
            image:image
        })
        localStorage.setItem('artista', JSON.stringify(fav))
        fav = localStorage.getItem('artista')
        console.log(fav);
    }

</script>
