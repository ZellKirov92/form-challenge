document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    function ckeckValidate () {
        if(firstName.length < 2 || lastName.length < 2 || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || password.length < 8) {
            const checkFname = document.getElementById("fname");
            checkFname.classList.add("invalid");
            let checkLname = document.getElementById("lname");
            checkLname.classList.add("invalid");
            let checkEmail = document.getElementById("email");
            checkEmail.classList.add("invalid");
            let checkPassword = document.getElementById("password");
            checkPassword.classList.add("invalid");
            return false;
        }
        else {
            let checkFname = document.getElementById("fname");
            checkFname.classList.remove("invalid");
            let checkLname = document.getElementById("lname");
            checkLname.classList.remove("invalid");
            let checkEmail = document.getElementById("email");
            checkEmail.classList.remove("invalid");
            let checkPassword = document.getElementById("password");
            checkPassword.classList.remove("invalid");
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