import { Component, OnInit } from '@angular/core';
import { Lesson } from './models/lesson.model';
import {LessonService} from './service/lesson.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ang_ui';
  lesson: Lesson[]=[];

  constructor(private lessonService: LessonService){

  }
  ngOnInit(): void {
    this.GetListSchedule();
  }

  GetListSchedule(){
    this.lessonService.GetListSchedule()
    .subscribe(
response => {
  this.lesson = response;
  // console.log(response);
}
    );
  }
}
