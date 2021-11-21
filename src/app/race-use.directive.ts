import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRaceUse]'
})
export class RaceUseDirective {

 @HostListener('select',['$event']) makeRace(event:string){
  console.log(event);
 };
 race:string=''; 


  constructor() { }

}
