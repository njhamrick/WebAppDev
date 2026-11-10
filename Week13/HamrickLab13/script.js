// Select the form, input fields, and feedback elements
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");



const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

const successMessage = document.getElementById("successMessage");


// Select the form, input fields, and feedback elements
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;


// Validate the form when the user clicks Submit
form.addEventListener("submit", (event) => {
    event.preventDefault();


    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    successMessage.textContent = "";


    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();


    let isValid = true;

// Check each field and display errors for invalid information

    if (name === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
    }


    if (email === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
    } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
    }


   
    if (phone === "") {
    phoneError.textContent = "Please enter your phone number.";
    isValid = false;
    } else if (!phonePattern.test(phone)) {
    phoneError.textContent = "Please use the format 123-456-7890.";
    isValid = false;
    }


// Display success feedback and reset the form when valid
    if (isValid === true) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
    } else {
    successMessage.textContent = "";
    }

});


// Validate individual fields when the user leaves them
nameInput.addEventListener("blur", () => {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
    } else {
        nameError.textContent = "";
    }
});


emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
    } else {
        emailError.textContent = "";
    }
});


phoneInput.addEventListener("blur", () => {
    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Please enter your phone number.";
    } else if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "Please use the format 123-456-7890.";
    } else {
        phoneError.textContent = "";
    }
});



