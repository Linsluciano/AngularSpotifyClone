import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input()
  ImagemUrl:string;

  @Input()
  Text='';

  constructor() { }

  ngOnInit(): void {
  }

}
