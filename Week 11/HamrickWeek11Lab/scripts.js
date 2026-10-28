// Example 1: Click event
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
alert("You clicked the button!");
});

// Add more event types
// You must include five different events total and they must correlate to the theme of your website.


// Event 1: Changes the background color when clicked
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "purple";
});



// Event 2: Welcomes the witch as they type their name
const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
    document.getElementById("greeting").textContent =
        "Welcome to the potion shop, Witch " + textInput.value + "!";
});



// Event 3: Casts a spell when the button is double-clicked
const dblBtn = document.getElementById("dblBtn");

dblBtn.addEventListener("dblclick", () => {
    dblBtn.textContent = "✨ The Spell Was Successfully Casted! ✨"; //Copy and pasted star symbol
});



// Event 4: Changes the text color when the mouse hovers over it
const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", () => {
    hoverText.style.color = "purple";
});

// Event 5: Returns the text to its original color
hoverText.addEventListener("mouseout", () => {
    hoverText.style.color = "black";
});

