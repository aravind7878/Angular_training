import { Component, ViewEncapsulation, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation:ViewEncapsulation.ShadowDom
})

export class AppComponent {
  title = 'SchoolList';
  studentList=[];
  @ViewChild('Viewchildtext',{static:true}) Viewchildtext : ElementRef;
  @ContentChild('Contentchildtext', {static:true}) Contentchildtext: ElementRef;
counter=0;
refInv;
ngOnInit(){

  console.log(this.Viewchildtext);
  console.log(this.Contentchildtext);


  
}
ngAfterContentInit(){

  console.log(this.Contentchildtext);
  console.log(this.Viewchildtext);
}
ngAfterViewInit(){
console.log(this.Viewchildtext);
console.log(this.Contentchildtext);


}
  AddStudent(Studentdata:{Name:string, class:string, grade:string}){

this.studentList.push({
Name:Studentdata.Name,
class:Studentdata.class,
grade:Studentdata.grade

})


  
  }

  OnSetInterval( num:number){
    console.log(num);
this.counter=num;


  }

}
