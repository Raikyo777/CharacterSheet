import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gender',
  template:
    `
        <div id="gender" >
            <p><input type="radio" name = "gender" (click)="sendGender('male')" checked = "true">Мужчина</p>
            <p><input type="radio" name = "gender" (click)="sendGender('female')">Женщина</p>
        </div>
    `,
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent implements OnInit{
  @Output() send = new EventEmitter()

  constructor(){}
  ngOnInit(){}


  public sendGender(gender:string){
    //console.log("Send gender to race");
    this.send.emit(gender);
  }
}