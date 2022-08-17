namespace ang.api.Models
{
    public class ScheduleParam
    {
        public int IdSchedule { get; set; }
        public string? WeekdayName { get; set; }
        public int numTimeLesson { get; set; }
        public string? SubjectName { get; set; }
        public string? FormatName { get; set; }
        public TimeSpan LessonTimeStart { get; set; }
        public TimeSpan LessonTimeEnd { get; set; }
        public int numCourse { get; set; }
        public string? numGroup { get; set; }
        public string? TeacherName { get; set; }
        public string? LectureHallNum { get; set; }
        public string? NoteName { get; set; }
        public string? NoteText { get; set; }
    }
}
