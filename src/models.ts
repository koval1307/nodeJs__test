
export interface ITeacher {
    id:string,
    firstName: string,
    lastName: string,
    subject: string,
    expierience:number
}
export interface ILesson {
    subject: Subject,
    teacher_id: number,
    classroom: Classroom,
    started_at: LessonStartingTime
}
export enum Subject {
    BIOLOGY = 'Biology',
    MATH = 'Math',
    PHYSICS = 'Physics',
    CHEMISTRY = 'Chemistry',
}

export enum Classroom {
    BIOLOGY_CLASSROOM = '301',
    MATH_CLASSROOM = '302',
    PHYSICS_CLASSROOM = '303',
    CHEMISTRY_CLASSROOM = '304',
     ADDITIONAL_CLASSROOM = '305',
}
export enum DayOfTheWeek {
 MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
}
export enum LessonStartingTime {
    FIRST = '09-00',
    SECOND = '09-55',
    THIRD = '10:50',
    FOURTH = '12:00',
    FIFTH = '12:55',
}