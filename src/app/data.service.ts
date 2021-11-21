import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data =  {
    name: "Кто-то",
    surname: "Ктотович",
    race: "Дварф",
    subrace: "Горный",
    gender: "male",
    raceBonus: [2,0,2,0,0,0],
    pars: [0,0,0,0,0,0],
    mods: [0,0,0,0,0,0],
    skills:[],
  }
  constructor() {

  }
  
  public getName(name:string) {
    this.data.name = name;
  }
  public getSurname(surname:string) {
    this.data.surname = surname;
  }
  public getRace(race:string) {
    this.data.race = race;
  }
  public getSubRace(subrace:string,raceBonus:[]) {
    this.data.subrace = subrace;
    this.data.raceBonus = raceBonus;
  }
  public getRaceBonus(raceBonus:[]) {
    this.data.raceBonus = raceBonus;
  }
  public getPars(pars:[],mods:[],raceBonus:[]) {
    this.data.pars = pars;
    this.data.mods = mods;
    this.data.raceBonus = raceBonus;
  }
  public getGender(gender:string) {
    this.data.gender = gender;
  }
  public getData() {
    return this.data;
  }
}
