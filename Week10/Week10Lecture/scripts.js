// //Topic for this week is DOM Selection and basic manipulation
// //Goal: Understand how JS can interact with HTML elements to change webpage contents, styles, and structure
// //What is DOM?
//     //The Document Object Model (DOM) is how the browser represents an HTML webpage so JavaScript can interact with it

//     //Think of it this way:

//     //HTML creates the structure

//     //CSS controls how the webpage looks

//     //Javascipt uses the DOM to change what appears on the webpage

//     //For example, Javascript can change a heading, update a background color, add new elements, or respond when someone clicks a button

// //JS to find the HTML element with the ID "title"
//     const title=document.getElementById("title");
// //Change the text display in the heading
//     title.textContent="Welcome to my website"; //Changes it on the webpage, but not in HTML

//     //document represents the webpage
//     //getElementById("title") dinds the heading
//     //const title stores a reference to that element
//     //.textContent replaces the heading's original text.
//     //The browser immediately displays the updated heading without requiring a page refresh

// //Understanding the DOM Tree
//     //The browser organizes HTML elements into a structure called the DOM Tree

//     //Simplified DOM tree showing parent and child elements
//     //Key idea: Each html element is represented by a node in the DOM tree. JS can locate and modify those elements

//     //    _______________Root Element_______________ 
//     //    |                                         |
//     //  Element <head>                      Element <body>
//     //    |                      ___________________|
//     //    |                      |                  |
//     //  Element <title>     Element <a>        Element <h1>
//     //    |                      |                  |
//     //    |                      |                  |
//     //   Text                 Attribute            Text
//     // "My title"              "href"           "My Header"        

// //The parent would be <body> the child would be <h1>

// //Selecting HTML Elements
// //Beefore JS can change an element, it must select that element
// //3 Elements for this:
//     // getElementById(), selects element using unique id

//     // querySelector(), selects the firsy matching alement

//     // querySelectorAll(), selects all matching elements

// //Now we add a little to the HTML <main>
// //Select the first element with class "main"

// const main=document.querySelector(".main");

// //Select every paragraph on the page

// const paragraph=document.querySelectorAll("p");

// //Change Test and Styles
// //Once JS selects an element, we can modify its content and appearance

// //Select the heading
// const heading=document.getElementById("title");

// //change the text
// heading.textContent="We have updated the text again"
// //change the color of the text
// heading.style.color="Purple"
// //change the font size
// heading.style.fontSize="50px"
// //change the background color
// heading.style.backgroundColor="Beige"

// //CSS use background-color, but JS uses backgroundColor



// //Selecting and Modifying Multiple Elements
// //What if we want to change every paragraph on a webpage?
// //Instead of selecting them individually, we can use querySelectorAll() with a loop
//     // Select all paragraph elements
//     const paragraphs=document.querySelectorAll("p");
//     //Loop through every paragraph
//     paragraphs.forEach((paragraph, index) => {
//         //Change the text of each paragraph
//         paragraph.textContent="Paragraph " + (index +1);
//         //change each paragraphs color
//         paragraph.style.color="green";
//     });
// //.forEach() goes through each selected paragraph

// //Create new HTML Elements via JS
//     //Select the UL
//     const list = document.getElementById("links");
//     //Create new list item
//     const item = document.createElement("li");
//     //Give list item some text
//     item.textContent = "JavaScript";

//     //Add item to existing list
//     list.appendChild(item);


//Intro to Event Listeners
//For the <button> you will need a CSS
//Change the button color when selected
    //Select button
    // const button=document.getElementById("toggle");

    // //listen for a button click
    // button.addEventListener("click",() =>{

    // //toggle the highlight class of the body
    // document.body.classList.toggle("highlight");
    // });


const greeting=document.getElementById("greeting");
const username=prompt("What is your name?");
if (username && username.trim() !== "") {

    greeting.textContent="Hello, " + username + "!";

} else {
    greeting.textContent="Hello there!"
}