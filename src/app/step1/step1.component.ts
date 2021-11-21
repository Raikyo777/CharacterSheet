import {Component} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})


export class Step1Component {
  _data:any;
  infoMake =  {
    name: "",
    surname: "",
    race: "elf",
    subrace: "",
    gender: "male",
    pars: [0,0,0,0,0,0],
    mods: [0,0,0,0,0,0],
    skills: []
  }


  raceSend(value:string): void {
    this.infoMake.race = value;
  }

  constructor(data: DataService){
    this._data=data; 
  }
}

