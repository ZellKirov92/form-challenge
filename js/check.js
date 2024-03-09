import {validate, init} from "./validate.js";
import {noValidate} from "./noValidate.js";
window.onload
    init();

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    function ckeckValidate () {
        if(firstName.length < 2 || lastName.length < 2 || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || password.length < 8) {
           noValidate();
           return false;   
        }
        else {
           validate();
           return true;
        }
    }
    if(!ckeckValidate()) {
        return false;
    }
    else {
        alert("Formulaire envoyé avec succès !");
        event.target.submit();
    }
});