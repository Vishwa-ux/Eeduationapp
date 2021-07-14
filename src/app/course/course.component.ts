import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course =[
  {'id':'1','name':'Learn angular',description:'absc','Image':'../../assets/angular.jpg'},
  {'id':'2','name':'Learn Javascrit',description:'fjksdhfdsgf','Image':'../../assets/java-script.jpg'},
  {'id':'3','name':'Learn Nodejs',description:'yfuyfuew','Image':'../../assets/nodejs.png'},
  {'id':'4','name':'Learn typescript',description:'putperturijtgtr','Image':'../../assets/typescript.jpg'},
  
]
}
