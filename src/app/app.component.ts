import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'SchoolList';
  studentList=[];

  AddStudent(Studentdata:{Name:string, class:string, grade:string}){

this.studentList.push({
Name:Studentdata.Name,
class:Studentdata.class,
grade:Studentdata.grade

})
  
  }

}
