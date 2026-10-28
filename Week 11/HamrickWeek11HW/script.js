
const themeButton = document.getElementById("themeToggle");
//Toggles the theme from light purple to dark purple
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    console.log("Theme changed!");
});



const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");

//A list of ingredients that can be added
const ingredients = [
    "Eye of Newt",
    "Dragon Scale",
    "Moonflower",
    "Phoenix Feather",
    "Mandrake Root",
    "Unicorn Hair",
    "Fairy Dust",
    "Bat Wing"
];

let counter = 0;

addBtn.addEventListener("click", () => {
    // Create a new ingredient
    const newItem = document.createElement("li");

    // Select the next magical ingredient
    newItem.textContent = ingredients[counter % ingredients.length];

    // Add the ingredient to the shopping list
    list.appendChild(newItem);

    counter++;
});




list.addEventListener("click", (event) => {
    // Check if the clicked element is a list item
    if (event.target.tagName === "LI") {
        console.log("Ingredient collected: " + event.target.textContent);
        event.target.remove();
    }
});


//Shows the key that was pressed on the webpage
const keyOutput = document.getElementById("keyOutput");

document.addEventListener("keyup", (event) => {
keyOutput.textContent = "Mystical key detected: " + event.key;
});
