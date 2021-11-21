import { Component, Input} from '@angular/core';
import {DataService} from '../../../data.service';
@Component({
  selector: 'app-subrace',
  template:`
        <div id="menu">
          <select id="subrace" [(ngModel)]='subraceChoose' (change)='clickSubRace(subraceChoose)'>
            <option *ngFor = "let subrace of subraceSel"  >{{subrace}}</option>
          </select>
          <h1></h1>
        </div>
  `,
  styleUrls: ['./subrace.component.scss'],
})

export class SubraceComponent{
  @Input() subraceSel:any;
  _data:any;
  raceBonus= [2,0,2,0,0,0];

  constructor(data: DataService){
    this._data=data; 
  }
  //Стартовая инициализация
  subraceChoose = "Горный";
  subraceInfo = "";
  clickSubRace(value:string) {
    switch (this.subraceChoose){
      // Дварф "Горный","Холмовой","Дуэргар"
      case 'Горный':{
        this.raceBonus= [2,0,2,0,0,0];
        break;  
      }
      case 'Холмовой':{
        this.raceBonus= [0,0,2,0,1,0];
        break;  
      }
      case 'Дуэргар':{
        this.raceBonus= [1,0,2,0,0,0];
        break;  
      }
      // Эльф "Высший","Лесной","Дроу","Морской","Шадар-кай","Эладрин"
      case 'Высший':{
        this.raceBonus= [0,2,0,1,0,0];
        break;
      }
      case 'Лесной':{
        this.raceBonus= [0,2,0,0,1,0];
        break;
      } 
      case 'Дроу':{
        this.raceBonus= [0,2,0,0,0,1];
        break;
      } 
      case 'Морской':{
        this.raceBonus= [0,2,1,0,0,0];
        break;
      } 
      case 'Шадар-кай':{
        this.raceBonus= [0,2,1,0,0,0];
        break;
      }
      case 'Эладрин':{
        this.raceBonus= [0,2,0,1,0,0];
        break;   
      }
      // Полурослик "Коренастый","Легконогий","Призрачный"
      case 'Коренастый':{
        this.raceBonus= [0,2,1,0,0,0];
        break;   
      }
      case 'Легконогий':{
        this.raceBonus= [0,2,0,0,0,1];
        break;   
      }
      case 'Призрачный':{
        this.raceBonus= [0,2,0,0,1,0];
        break;   
      }
      //Человек "Дамарец","Иллусканец","Калишит","Мулан","Рашеми","Тетирец","Тёрами","Чондатанец","Шу"
      case 'Дамарец':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
      case 'Иллусканец':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
      case 'Калишит':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
      case 'Рашеми':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
      case 'Тёрами':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
      case 'Чондатанец':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
      case 'Мулан':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
      case 'Шу':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
      case 'Тетирец':{
        this.raceBonus= [1,1,1,1,1,1];
        break;   
      }
    //Гном "Лесной","Скальный","Свирфнеблин"
      case 'Лесной':{
        this.raceBonus= [0,1,0,2,0,0];
        break;   
      }
      case 'Скальный':{
        this.raceBonus= [0,0,1,2,0,0];
        break;   
      }
      case 'Свирфнеблин':{
        this.raceBonus= [0,1,0,2,0,0];
        break;   
      }
    }
     //Send data to service
     this._data.getSubRace(value,this.raceBonus);
  }


}