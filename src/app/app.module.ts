import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceComponent } from './step1/race/race.component';
import { SubraceComponent } from './step1/race/subrace/subrace.component';
import { GenderComponent } from './step1/race/gender/gender.component';
import { CalculatorComponent } from './step2/calculator/calculator.component';
import {Step1Component} from './step1/step1.component';
import {Step2Component} from './step2/step2.component';
import { StartComponent } from './start/start.component';
import { RaceUseDirective } from './race-use.directive';
import {DataService} from './data.service';

//Constantes
const appRoutes: Routes = [
  {path:'', component: StartComponent},
  {path:'step1', component: Step1Component},
  {path:'step2', component: Step2Component}, 
]


@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    SubraceComponent,
    GenderComponent,
    CalculatorComponent,
    Step1Component,
    Step2Component,
    StartComponent,
    RaceUseDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}