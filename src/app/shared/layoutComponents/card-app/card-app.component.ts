import { Component, OnInit, Input } from '@angular/core';
import { IDescripcionApp } from 'src/app/core/data/IDescripcionApp';

@Component({
  selector: 'app-card-app',
  templateUrl: './card-app.component.html',
  styleUrls: ['./card-app.component.css']
})
export class CardAppComponent implements OnInit {

  @Input() set aplicaciones(data: IDescripcionApp){
    console.log('data >>>>>> ', data);

  };



  constructor() { }

  ngOnInit(): void {
  }

}
