export function noValidate () {
        const inputsId = ['fname', 'lname', 'email', 'password'];
        for( const id of inputsId ) {
            const allIdInput = document.getElementById(id);
            allIdInput.classList.add("invalid");
        }
        const allSpan = document.querySelectorAll("span.displayError");
        allSpan.forEach((span) => {
            span.style.display = "block";
        });
        return false;
    }