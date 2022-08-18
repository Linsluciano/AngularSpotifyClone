import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArtista } from 'src/app/interfaces/IArtista';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-card-artistas',
  templateUrl: './card-artistas.component.html',
  styleUrls: ['./card-artistas.component.scss']
})
export class CardArtistasComponent implements OnInit {

  menuSelecionado = 'Home';

  artistas: IArtista[] = [];
  playlists: IPlaylist[] = []



  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.buscarTopArtistas();

  }

  async buscarTopArtistas() {
    this.artistas = await this.spotifyService.buscarTopArtistas(5);
  }

  botaoClick(botao: string) {
    this.menuSelecionado = botao;
    this.router.navigateByUrl('player/home')

  }

  irParaArtista(artistaId: string) {
    this.menuSelecionado = artistaId;
    this.router.navigateByUrl(`player/lista/artista/${artistaId}`)
  }

  
}
