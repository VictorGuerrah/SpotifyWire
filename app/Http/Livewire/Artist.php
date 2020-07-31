<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Rennokki\Larafy\Larafy;

class Artist extends Component
{
    public $artist;
    public $albuns;

    public function render()
    {
        return view('livewire.artist');
    }

    public function setInfo($id) 
    {
        $api = new Larafy();

        $albuns = $api->getArtistAlbums($id);
        $albuns = json_decode(json_encode($albuns), true);

        $artist = $api->getArtist($id);
        $artist = json_decode(json_encode($artist), true);

        if (!empty($albuns['items'])){
            foreach ($albuns['items'] as $key => $value) {

                $data['albuns'][] = [
                    'name' => isset($value['name']) ? $value['name'] : "",
                    'image' => isset($value['images'][0]['url']) ? $value['images'][0]['url']  : asset('img/no-image.png')
                ];
            }
        }

        if (!empty($artist)){
                $data['artist'] = [
                    'name' => isset($artist['name']) ? $artist['name'] : "",
                    'image' => isset($artist['images'][0]['url']) ? $artist['images'][0]['url']  : asset('img/no-image.png')
                ];
        }
        
        
        $this->albuns = $data['albuns'];
        $this->artist = $data['artist'];

    }

    public function home(){
        return redirect()->to("/spotify");

    }
}
