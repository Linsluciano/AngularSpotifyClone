import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { newMusica } from '../common/factories';
import { IMusica } from '../interfaces/IMusica';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  musicaAtual= new BehaviorSubject<IMusica>(newMusica());
  timerId:any = null;

  constructor(private spotifyService: SpotifyService) {
    this.obterMusicaAtual();
  }


  async obterMusicaAtual(){
    clearTimeout(this.timerId);

    //Obtenho a Musica que está tocando
    const musica = await this.spotifyService.obterMusicaAtual();
    this.definirMusicaAtual(musica);

    //Causo o Loop de pesquisa para identificar a musica atual tocando sempre corretamente
    this.timerId = setInterval(async()=>{
      await this.obterMusicaAtual();
    },5000)
  }

  definirMusicaAtual(musica:IMusica){
    this.musicaAtual.next(musica);
  }

  async voltarMusica(){
    await this.spotifyService.voltarMusica(); 
  }

  async proximaMusica(){
    await this.spotifyService.proximaMusica(); 
  }
  async pausarMusica (){
    await this.spotifyService.pausarMusica();
  }
  async continuarMusica(){
    await this.spotifyService.continuarMusica();
  }
}
