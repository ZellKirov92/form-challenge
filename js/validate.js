export function validate() {
        const inputsId = ['fname', 'lname', 'email', 'password'];
        for( const id of inputsId ) {
            const allIdInput = document.getElementById(id);
            allIdInput.classList.remove("invalid");
        }
        const allSpan = document.querySelectorAll('span.displayError');
        allSpan.forEach((span) => {
            span.style.display = "none";
        });

        return true;
}

 export function init () {
    validate();
}