import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchooleditComponent } from './schooledit/schooledit.component';
import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import{EvenComponent} from './Even/Even.component';
@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    SchooleditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
