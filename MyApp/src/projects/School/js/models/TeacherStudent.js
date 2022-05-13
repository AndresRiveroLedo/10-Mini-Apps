import {Student} from "./Student.js"
import {Comment} from "./Comment.js"

export class TeacherStudent extends Student{

    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

    postComment(commentContent){
        const comment = new Comment(
            {
                content: commentContent,
                studentName: this.name,
                studenRole: "Professor",
                likes: "1"
            }
        )
        comment.post()
    }
}