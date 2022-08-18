import { Component, OnInit } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-buscas-recentes',
  templateUrl: './buscas-recentes.component.html',
  styleUrls: ['./buscas-recentes.component.scss']
})
export class BuscasRecentesComponent implements OnInit {

  pesquisasRecentes = [
    'Heavy', 'Rammstein', 'Iron', 'Rap de Anime', 'Seu top Artistas'
  ];
  campoPesquisa = '';

  constructor() { }

  ngOnInit(): void {
  }

  definirPesquisa(pesquisa: string){
    this.campoPesquisa = pesquisa;
  }

  buscar(){
    console.log("buscando...", this.campoPesquisa)

  }

}
