console.log("DOM HW Loaded"); //Confirms the JS is linked properly

// 1) Grab your title and main section
//Selects the page title and main content, then updates the total
const titleEl = document.getElementById("pageTitle");
const mainEl = document.getElementById("mainContent"); 
// 2) Update the title text
titleEl.textContent = "Sakurazato — Powered by JavaScript";

const imgEl = document.getElementById("featureImage");
// Swap to a new image and alt text (use any public image URL)
//Selects the image and updates its source and description
imgEl.src = "https://i.pinimg.com/736x/d3/ba/c4/d3bac4aef4c06565d83de21c43877be7.jpg";
imgEl.alt = "Picture of an old Cherry Blossom Village";

// Example data structure — use your own keys/values
//Creates a loop containing three Sakurazato landmarks
const items = [
{ name: "Sakura Hall", info: "The heart of the village" },
{ name: "Torii Gate", info: "The entrance to Sakurazato" },
{ name: "Houses", info: "The houses belonging to the villagers" }
];
// Target the list you created in HTML
const listEl = document.getElementById("featureList");
listEl.innerHTML = ""; // clear existing content from HTML list selected
// Create and append list items from your data
//Creates a list item for each landmark and adds it to the page
items.forEach((obj) => {
const li = document.createElement("li");
li.textContent = `${obj.name} — ${obj.info}`;
listEl.appendChild(li);
});

//Toggle the highlight class when the button is clicked
const toggleBtn = document.getElementById("toggleHighlight");
// Toggle on the <main> or on document.body — your choice
toggleBtn.addEventListener("click", () => {
mainEl.classList.toggle("hightMode");
});

//Switch between two villages when the button is clicked
const swapBtn = document.getElementById("swapImg");
let swapped = false;
swapBtn.addEventListener("click", () => {
if (!swapped) {
imgEl.src = "https://images.stockcake.com/public/e/6/6/e66006a1-efac-4a76-9019-1508eb128512/cherry-blossom-village-stockcake.jpg";
imgEl.alt = "Picture of a cozy Sakura village";
swapped = true; } else {
imgEl.src = "https://i.pinimg.com/736x/d3/ba/c4/d3bac4aef4c06565d83de21c43877be7.jpg";
imgEl.alt = "Picture of an old Cherry Blossom Village";
swapped = false;
}
});

//Selects the new paragraph and updates its text, color, and font
const paragraph=document.getElementById("pText");
paragraph.textContent="This is Sakurazato, The Cherry Blossom Villge!";

pText.style.color="HotPink";
pText.style.fontFamily="Georgia, Times New Roman, serif";
