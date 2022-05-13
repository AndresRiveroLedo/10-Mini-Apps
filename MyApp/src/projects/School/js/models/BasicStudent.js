import {Student} from "./Student.js"

export class BasicStudent extends Student{
    
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse.lang !=="English"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn(`Sorry, ${this.name}, I couldn't take the English course`)
        }
    }
}