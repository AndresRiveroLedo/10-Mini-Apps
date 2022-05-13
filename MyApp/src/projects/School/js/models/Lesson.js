export class Lesson{
    
    constructor({id, title}){
        this._id = id;
        this._title = title;
    }

    get id(){
        return this._id;
    }

    set id(id){
        return this._id = id;
    }

    get title(){
        return this.title;
    }

    set title(title){
        this._title = title;
    }

}