import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'Even',
    templateUrl: './Even.component.html',
    styles: ['P{color:green}']
  })

  export class EvenComponent implements OnInit {
    @Input() EvenElement:number;
    constructor() { }
  
    ngOnInit() {
    }
  
  }