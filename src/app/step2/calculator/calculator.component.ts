import { Component} from '@angular/core';
import {DataService} from '../../data.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {

// инициализация
_data:any;
startAttr = [8,9,10,11,12,13,14,15];
raw = {"str": 8,"dex": 8,"con": 8,"int": 8,"wis": 8,"cha": 8};
total = {"str": 8,"dex": 8,"con": 8,"int": 8,"wis": 8,"cha": 8};
mods = {"str": -1,"dex": -1,"con": -1,"int": -1,"wis": -1,"cha": -1};
points = {"str": 0,"dex": 0,"con": 0,"int": 0,"wis": 0,"cha": 0};
raceBonus = {"str": 2,"dex": 0,"con": 2,"int": 0,"wis": 0,"cha": 0};//стартовая позиция рассчитаная на горного дварфа
totalPoints = 27;
spendPoints = 0;

  constructor(data: DataService){
  this._data=data; 
  }
  ngOnInit(){
    this.fillRaceBonus (this._data.getData().raceBonus);
  }
  fillRaceBonus(raceBonus:any){
    this.raceBonus = {"str": raceBonus[0],"dex": raceBonus[1],"con": raceBonus[2],"int": raceBonus[3],"wis": raceBonus[4],"cha": raceBonus[5]};
  }
  changeAttr(){
    console.log(this.points);
    let rez = this.points.str + this.points.dex + this.points.con + this.points.int + this.points.wis + this.points.cha;
    console.log(rez);

  }
  calcStrChange() {
    this.total.str = this.raw.str + this.raceBonus.str;
    this.mods.str = Math.floor((this.total.str - 10)/2);
    //подсчет очков потраченых на характиристику 
    let attr = this.raw.str;
    let rez=0;
    while (attr > 8) { 
      rez+= (attr > 13)? 2:1;
      attr = attr - 1; 
    }
    this.points.str = rez;
    this.spendPoints =this.points.str + this.points.dex + this.points.con + this.points.int + this.points.wis + this.points.cha;
  }
  calcDexChange() {
    this.total.dex = this.raw.dex + this.raceBonus.dex;
    this.mods.dex = Math.floor((this.total.dex - 10)/2);
    //подсчет очков потраченых на характиристику 
    let attr = this.raw.dex;
    let rez=0;
    while (attr > 8) { 
      rez+= (attr > 13)? 2:1;
      attr = attr - 1; 
    }
    this.points.dex = rez;
    this.spendPoints =this.points.str + this.points.dex + this.points.con + this.points.int + this.points.wis + this.points.cha;
  }
  calcConChange() {
    this.total.con = this.raw.con + this.raceBonus.con;
    this.mods.con = Math.floor((this.total.con - 10)/2);
    //подсчет очков потраченых на характиристику 
    let attr = this.raw.con;
    let rez=0;
    while (attr > 8) { 
      rez+= (attr > 13)? 2:1;
      attr = attr - 1; 
    }
    this.points.con = rez;
    this.spendPoints =this.points.str + this.points.dex + this.points.con + this.points.int + this.points.wis + this.points.cha;
  }
  calcWisChange() {
    this.total.wis = this.raw.wis + this.raceBonus.wis;
    this.mods.wis = Math.floor((this.total.wis - 10)/2);
    //подсчет очков потраченых на характиристику 
    let attr = this.raw.wis;
    let rez=0;
    while (attr > 8) { 
      rez+= (attr > 13)? 2:1;
      attr = attr - 1; 
    }
    this.points.wis = rez;
    this.spendPoints =this.points.str + this.points.dex + this.points.con + this.points.int + this.points.wis + this.points.cha;
  }
  calcIntChange() {
    this.total.int = this.raw.int + this.raceBonus.int;
    this.mods.int = Math.floor((this.total.int - 10)/2);
    //подсчет очков потраченых на характиристику 
    let attr = this.raw.int;
    let rez=0;
    while (attr > 8) { 
      rez+= (attr > 13)? 2:1;
      attr = attr - 1; 
    }
    this.points.int = rez;
    this.spendPoints =this.points.str + this.points.dex + this.points.con + this.points.int + this.points.wis + this.points.cha;
  }
  calcChaChange() {
    this.total.cha = this.raw.cha + this.raceBonus.cha;
    this.mods.cha = Math.floor((this.total.cha - 10)/2);
    //подсчет очков потраченых на характиристику 
    let attr = this.raw.cha;
    let rez=0;
    while (attr > 8) { 
      rez+= (attr > 13)? 2:1;
      attr = attr - 1; 
    }
    this.points.cha = rez;
    this.spendPoints =this.points.str + this.points.dex + this.points.con + this.points.int + this.points.wis + this.points.cha;
  }

}
