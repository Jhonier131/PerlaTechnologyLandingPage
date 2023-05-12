import { Component, Input, OnInit } from '@angular/core';
import { IDescripcionPersona } from 'src/app/core/data/IDescripcionPersonas';

@Component({
  selector: 'app-card-persona',
  templateUrl: './card-persona.component.html',
  styleUrls: ['./card-persona.component.css']
})
export class CardPersonaComponent implements OnInit {

  public informacionPersona: IDescripcionPersona;

  @Input() set persona( data: IDescripcionPersona){
    this.informacionPersona = data;
    console.log('vela', this.informacionPersona);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
