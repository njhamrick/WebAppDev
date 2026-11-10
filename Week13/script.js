
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

console.log("Name:", name);
console.log("Email:", email);
console.log("Phone:", phone);

form.reset();

});


let nickname = "AB";

if (nickname.length < 3) {
    console.log("Nickname must be at least 3 characters.");
} else {
    console.log("Nickname accepted.");
}


colorMessage.className = "error";
colorMessage.style.color = "red";


const numberPattern = /^[0-9]{3}$/;

console.log(numberPattern.test("123"));
console.log(numberPattern.test("12"));
console.log(numberPattern.test("ABC"));



let code = "123";

if (numberPattern.test(code)) {
    console.log("Valid code.");
} else {
    console.log("Invalid code.");
}


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailPattern.test("student@example.com"));
console.log(emailPattern.test("studentexample.com"));



// gameInput.addEventListener("blur", () => {
//     if (gameInput.value.trim() === "") {
//         console.log("Please enter a game.");
//     }
// });



const gameInput = document.getElementById("favoriteGame");
const gameError = document.getElementById("gameError");

gameInput.addEventListener("blur", () => {
    if (gameInput.value.trim() === "") {
        gameError.textContent = "Please enter a game.";
    } else {
        gameError.textContent = "";
    }
});


const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    console.log(searchInput.value);
});



form.reset();
