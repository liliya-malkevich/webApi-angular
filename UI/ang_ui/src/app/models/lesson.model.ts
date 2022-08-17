import { Time } from "@angular/common";

export interface Lesson{
  IdSchedule: Int32Array;
  WeekdayName: string;
  numTimeLesson: Int32Array;
  SubjectName: string;
  FormatName: string;
  LessonTimeStart: Time;
  LessonTimeEnd: Time;
  numCourse: Int32Array;
  numGroup: string;
  TeacherName: string;
  LectureHallNum: string;
  NoteName: string;
  NoteText: string;
}
