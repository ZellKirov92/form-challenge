let formSubmit = document.getElementById('form');
let fnameInput = document.getElementById('fname');
let lnameInput = document.getElementById('lname');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

        // Écouteur d'événement pour le prénom (fname)
        fnameInput.addEventListener('input', (ev) => {
            let value = fnameInput.value;
            if (value.length < 2) {
                fnameInput.checkValidity('Please enter a valid first name');
            } else {
                fnameInput.checkValidity('');
            }
        });

        // Écouteur d'événement pour le nom (lname)
        lnameInput.addEventListener('input', (ev) => {
            let value = lnameInput.value;
            if (value.length < 2) {
                lnameInput.checkValidity('Please enter a valid last name');
            } else {
                lnameInput.checkValidity('');
            }
        });

        // Écouteur d'événement pour l'adresse e-mail (email)
        emailInput.addEventListener('input', (ev) => {
            let value = emailInput.value;
            if (!value.match(/^\S+@\S+\.\S+$/)) {
                emailInput.checkValidity('please enter a valid email');
            } else {
                emailInput.checkValidity('');
            }
        });

        // Écouteur d'événement pour le mot de passe (password)
        passwordInput.addEventListener('input', (ev) => {
            let value = passwordInput.value;
            if (value.length < 6) {
                passwordInput.checkValidity('The password must be at least 6 characters long');
            } else {
                passwordInput.checkValidity('');
            }
        });

        // Éviter le rechargement de la page lors de la soumission du formulaire
        formSubmit.addEventListener('submit', (ev) => {
            ev.preventDefault();
            console.log('Form submitted successfully!');
        });