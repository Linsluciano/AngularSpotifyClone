import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusica } from 'src/app/common/factories';
import { IMusica } from 'src/app/interfaces/IMusica';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-lista-musicas',
  templateUrl: './lista-musicas.component.html',
  styleUrls: ['./lista-musicas.component.scss']
})
export class ListaMusicasComponent implements OnInit, OnDestroy {

  bannerImagemUrl = '';
  bannerTexto= '';

  musicas: IMusica[]=[];
  musicaAtual: IMusica = newMusica();
  playIcone = faPlay;

  title ='';

  subs: Subscription[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService
    ) { }

  ngOnInit(): void {
    this.obterMusicas();
    this.obterMusicaAtual();
  }
  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    
  }

  obterMusicaAtual(){
    const sub = this.playerService.musicaAtual.subscribe(musica =>{
      this.musicaAtual = musica;
    });
    this.subs.push(sub)
  }

  obterMusicas(){
    const sub = this.activatedRoute.paramMap
      .subscribe(async params=>{
        const tipo = params.get('tipo');
        const id = params.get('id');
        await this.obterDadosPagina(tipo, id);
      });
      this.subs.push(sub);
  }

  async obterDadosPagina (tipo: string, id:string){
    if (tipo ==='playlist')
      await this.obterDadosPlaylist(id);
    else 
      await this.obterDadosArtista(id);
  }  

  async obterDadosPlaylist (playlistId: string){
   const playlistMusicas = await this.spotifyService.buscarMusicasPlaylist(playlistId);
   this.definirDadosPagina(playlistMusicas.nome, playlistMusicas.imagemUrl, playlistMusicas.musicas);
   this.title = 'Musicas da Playlist : ' + playlistMusicas.nome 
  }

  async obterDadosArtista(playlistId: string) {
    const playlistMusicasArtista = await this.spotifyService.buscarMusicasArtista(playlistId);
    this.definirDadosPagina(playlistMusicasArtista.nome, playlistMusicasArtista.imagemUrl, playlistMusicasArtista.musicas);
    this.title = 'Musicas da Playlist do Artista : ' + playlistMusicasArtista.nome
  }
  
  definirDadosPagina(bannerTexto: string, bannerImage: string, musicas: IMusica[]){
    this.bannerImagemUrl = bannerImage;
    this.bannerTexto = bannerTexto;
    this.musicas = musicas;
  }

  obterArtistas (musica: IMusica) {
    return musica.artista.map(artista => artista.nome).join(', ')
  }

  async executarMusica(musica: IMusica){
    await this.spotifyService.executarMusica(musica.id);
    this.playerService.definirMusicaAtual(musica);
  }
}
