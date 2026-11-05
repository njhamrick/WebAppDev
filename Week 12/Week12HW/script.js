
// Dough Re Mi - Pizza Order Form

// Select the form and the section where the order will appear
const form = document.getElementById("PizzaForm");
const results = document.getElementById("results");

// Listen for the customer to submit their pizza order
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    // Collect the customer's information
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Find which pizza crust the customer selected
    const crust = document.querySelector('input[name="crust"]:checked')?.value || "None selected";

    // Collect the IDs of all checked toppings
    const toppings = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(topping => topping.id);

    // Get the customer's selected order type
    const orderType = document.getElementById("orderType").value;

    // Display the completed pizza order on the webpage
    results.innerHTML = `
        <h2>Your Pizza Masterpiece 🎶🍕</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Special Instructions:</strong> ${message || "None"}</p>
        <p><strong>Crust:</strong> ${crust}</p>
        <p><strong>Toppings:</strong> ${toppings.join(", ") || "None"}</p>
        <p><strong>Order Type:</strong> ${orderType}</p>
    `;
});
