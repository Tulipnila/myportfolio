import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = '';
  place: string = '';

  constructor(public service:DataService){
    this.name = service.name;
    this.place = service.Place;
  }

}
