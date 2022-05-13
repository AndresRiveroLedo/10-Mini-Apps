
import {Github} from "./github.js";
import {UI} from "./ui.js";

//const {client_id, client_secret} = require('./config.json');

const github = new Github("1def8ba4b4573179b037", "47c24aae84e003b16114ce10ca3778f798bbc835" );
const ui = new UI();

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const textSearch = document.getElementById("textSearch").value;
    
    if(textSearch !== ''){
        github.fetchUser(textSearch)
            .then(data => {
                if(data.userData.message === 'Not Found'){
                   ui.showMessages("User Not Found", 'alert alert-danger col-md-12 mt-2')
                }else{
                    ui.showProfile(data.userData);
                    ui.showRepositories(data.repositories)
                    ui.clearMessage();
                }
                
            })
    }else{
        ui.reset();
    }
    
    

});