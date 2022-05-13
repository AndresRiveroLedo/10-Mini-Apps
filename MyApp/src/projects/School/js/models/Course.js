export class Course{
    
    constructor({id, name, lessons = [], teacher, isFree = false, lang= 'Spanish'}){
        this._id = id;
        this._name = name;
        this._lessons = lessons;
        this._teacher = teacher;
        this.isFree = isFree;
        this.lang = lang;
    }

    get title(){
        return this._title;
    }

    set title(value){
        if(value.length < 3){
            throw new Error('Title must be at least 5 character long')
        }else{
            this._title = title;
        }
    }

    get name(){
        return this.name;
    }

    set name(name){
        if(name === "Curso de POO"){
            console.log("Es curso es pago")
        }else{
            this_name = name;
        }
       

    }
}
