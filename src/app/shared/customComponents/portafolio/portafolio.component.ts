import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { listAplicaciones } from 'src/app/core/data/IDescripcionApp';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  aplicaciones = listAplicaciones;

  constructor() { }

  ngOnInit(): void {

    console.log(this.aplicaciones);
  }

}
