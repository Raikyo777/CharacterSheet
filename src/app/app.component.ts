import {Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _data:any;

constructor(data:DataService){
  this._data=data.getData();
}

}
  

