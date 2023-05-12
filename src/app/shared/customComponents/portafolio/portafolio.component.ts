import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDescripcionApp, listAplicaciones } from 'src/app/core/data/IDescripcionApp';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements OnInit {

  aplicaciones: IDescripcionApp[] = [];

  constructor() {}

  ngOnInit(): void {
    this.aplicaciones = listAplicaciones.listaDescripcionApp;
  }
}
