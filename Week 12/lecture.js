console.log("Linked")
//Select the form element
const form=document.getElementById("contactForm");
//Listen for the form submit event
form.addEventListener("submit", function(event){
    //Prevent the default form submission behavior
    event.preventDefault(); //Stop the page from refreshing when the form is submitted

//Get the input values from the form
// const name=document.getElementById("name").value;
// console.log("Name: ", name)

//Display the input values in the console and show it on the page
const name=document.getElementById("name").value;
form.innerHTML=`<p>Hello, ${name}! Thanks for Submitting. </p>`





});

