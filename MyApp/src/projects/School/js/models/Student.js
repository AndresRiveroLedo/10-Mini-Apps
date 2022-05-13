import {Comment} from "./Comment.js"

export class Student{

    
    constructor({id,name, surname, email, points = 0, twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []}){
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._points = points;
        this._approvedCourses = approvedCourses;
        this._learningPaths = learningPaths;
        this._socialMedia = {
          twitter,
          instagram,
          facebook,
        };

    }

    getName(){
        return this._name;
    }

    setName(name){
        this._name = name;
    }

    getSurname(){
        return this._surname;
    }

    setName(surname){
        this._surname = surname;
    }

    getEmail(){
        return this._email;
    }

    setEmail(email){
        this._email = email;
    }

    getapprovedCourses () {
        return this._approvedCourses;
      }
    
      setapprovedCourses (newApprovedCourses) {
        this._approvedCourses = newApprovedCourses;
      }

    postComment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        
        comment.post();
    }

    
}