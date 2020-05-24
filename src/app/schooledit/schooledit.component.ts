import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-schooledit',
  templateUrl: './schooledit.component.html',
  styleUrls: ['./schooledit.component.css']
})
export class SchooleditComponent implements OnInit {

 @Output("StudentData") StudentSubmitted= new EventEmitter<{Name:string, class:string, grade:string}>();

  constructor() { }

Name='';
class='';
grade='';
  ngOnInit() {
  }
onSubmitClikced(sportsdata){
console.log(sportsdata)
this.StudentSubmitted.emit( { Name:this.Name, class:this.class, grade:this.grade+' Sports is '+sportsdata.checked  });

}

Clear(){
  this.Name='';
  this.class='';
  this.grade='';

  
}




}
