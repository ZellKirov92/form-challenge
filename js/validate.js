export function validate() {
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