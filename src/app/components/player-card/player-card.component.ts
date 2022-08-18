import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPauseCircle, faPlayCircle, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusica } from 'src/app/common/factories';
import { IMusica } from 'src/app/interfaces/IMusica';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  musica: IMusica = newMusica();
  subs: Subscription[] = []

  //Icones
  anteriorIcone = faStepBackward;
  proximoIcone = faStepForward;
  playIcone = faPlayCircle;
  pauseIcone = faPauseCircle;


  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.obterMusicaTocando();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  obterMusicaTocando(){
    const sub = this.playerService.musicaAtual.subscribe(musica =>{
      this.musica = musica;
    });
    this.subs.push(sub);
  }

  voltarMusica(){
    this.playerService.voltarMusica();
  }

  proximaMusica(){
    this.playerService.proximaMusica();
  }
  
  pausarMusica(){
    this.playerService.pausarMusica();
  }

  continuarMusica(){
    this.playerService.continuarMusica();
  }

}
