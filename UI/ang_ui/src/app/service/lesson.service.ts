import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../models/lesson.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  baseUrl = 'https://localhost:7170/api/Lesson'

  constructor(private http: HttpClient) { }

  GetListSchedule(): Observable<Lesson[]>{
return this.http.get<Lesson[]>(this.baseUrl);
  }
}
