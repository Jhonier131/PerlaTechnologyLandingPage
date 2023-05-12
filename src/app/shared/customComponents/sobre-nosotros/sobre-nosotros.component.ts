import { Component, OnInit } from '@angular/core';
import { IDescripcionPersona, listaPersonas } from 'src/app/core/data/IDescripcionPersonas';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  personas: IDescripcionPersona[] = [];

  constructor() { }

  ngOnInit(): void {
    this.personas = listaPersonas.listaDescripcionPersonas;
    console.log(this.personas)
  }

}
