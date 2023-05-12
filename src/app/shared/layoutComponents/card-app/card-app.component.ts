import { Component, OnInit, Input } from '@angular/core';
import { IDescripcionApp } from 'src/app/core/data/IDescripcionApp';

@Component({
  selector: 'app-card-app',
  templateUrl: './card-app.component.html',
  styleUrls: ['./card-app.component.css']
})
export class CardAppComponent implements OnInit {

  public informacionApp : IDescripcionApp;

  @Input() set aplicaciones(data: IDescripcionApp){
    this.informacionApp = data;
    console.log('data >>>>>> ', data);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
