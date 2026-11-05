
// Select the form and the section where results will appear
const form = document.getElementById("huesMoodsForm");
const result = document.getElementById("results");

// Listen for the user to submit the form
form.addEventListener("submit", function(event) {
    // Prevent the page from refreshing when submitted
    event.preventDefault();

    // Get the name entered by the user
    const name = document.getElementById("name").value;

    // Get the email address entered by the user
    const email = document.getElementById("email").value;

    // Get the message written by the user
    const message = document.getElementById("message").value;

    // Find the selected radio button and get its color value
    // Optional chaining prevents an error if no color is selected
    const color = document.querySelector('input[name="color"]:checked')?.value;

    // Display the submitted information in the results section
    result.innerHTML = `
        <h3>Your Colorful Story</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Signature Shade:</strong> ${color}</p>
    `;
});



// Reflection Questions

// 1. What does event.preventDefault() actually prevent?
// It prevents the form from reloading after submission. This allows JavaScript to display the results without losing them.

// 2. What does .value return?
// The .value property returns the current value of an input field.
// In this lab, it retrieves the user's name, email, message, and selected signature shade.

// 3. Why use template literals (${...}) instead of string concatenation?
// Template literals make it easier to combine text and variables and write HTML across multiple lines, making the code easier to read.
