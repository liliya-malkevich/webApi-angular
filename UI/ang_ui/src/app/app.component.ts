import { Component, OnInit } from '@angular/core';
import { Lesson } from './models/lesson.model';
import {LessonService} from './service/lesson.service'
import { DxDataGridModule } from 'devextreme-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
providers:[LessonService]
})
export class AppComponent implements OnInit{
  title = 'ang_ui';
  lesson: Lesson[]=[];

  constructor(private lessonService: LessonService){

  }
  ngOnInit(): void {
    this.GetListSchedule();
  }

  helloWorld() {
    alert('Hello world!');
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

