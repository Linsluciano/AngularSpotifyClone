import { IArtista } from "../interfaces/IArtista";
import { IMusica } from "../interfaces/IMusica";
import { IPlaylist } from "../interfaces/IPlaylist";

export function newArtista():IArtista {
    return {
        id:'',
        imagemUrl:'',
        nome:'',
        musicas: []
    };
}

export function newMusica(): IMusica{
    return{
        id:'',
        album:{
            id:'',
            imagemUrl:'',
            nome:'',
        },
        artista: [],
        tempo:'',
        titulo:''
    }
}

export function newPlaylist(): IPlaylist {
    return {
        id: '',
        imagemUrl:'',
        nome: '',
        musicas: []
    }
}
export function newPlaylistArtista(): IPlaylist {
    return {
        id: '',
        imagemUrl:'',
        nome: '',
        musicas: []
    }
}