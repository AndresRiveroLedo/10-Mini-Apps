import {Student} from './Student.js'

export  class FreeStudent extends Student{
    constructor(props) {
      super(props) //*Llama al constructor de la clase madre
    }
  
    approveCourse(newCourse) {
      if (newCourse.isFree){
        this.approvedCourses.push(newCourse)
      } else {
        console.log("Lo sentimos, sólo puedes tomar cursos gratis")
      }
    }
}