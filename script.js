const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'rgb(245, 94, 106)';
        messageContainer.style.borderColor = 'rgb(245, 94, 106)';
        return;
    }
    // Check if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'rgb(88, 212, 88)';
        password2El.style.borderColor = 'rgb(88, 212, 88)';
    } else {
        passwordsMatch = false;
        message.textContent = 'Passwords do no match.';
        message.style.color = 'rgb(245, 94, 106)';
        messageContainer.style.borderColor = 'rgb(245, 94, 106)';
        password1El.style.borderColor = 'rgb(245, 94, 106)';
        password2El.style.borderColor = 'rgb(245, 94, 106)';
        return;
    }
    // If form is valid & passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Success!';
        message.style.color = 'rgb(88, 212, 88)';
        messageContainer.style.borderColor = 'rgb(88, 212, 88)';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit Data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);