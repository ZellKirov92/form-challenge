export function noValidate () {
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