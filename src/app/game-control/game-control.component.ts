import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }
  @Output() GameCount = new EventEmitter<number>();
  ngOnInit() {
  }
increment=0;
ref;
startGame(){

  clearInterval(this.ref);
this.ref=setInterval(()=>{
  this.increment++;
  this.GameCount.emit(this.increment);

}, 1000)


}
Stopgame(){

  clearInterval(this.ref);


}


}
