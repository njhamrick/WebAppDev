//Define Three Functions
// greetUser() → accepts a name parameter and logs “Hello, [name]!”
// addNumbers() → takes two parameters and returns their sum.
// calculateArea() → takes length and width and returns length × width.


function greetUser(name){ //name is the parameter
    console.log("Hello, " + name + "!"); //this prints the greeting to the console after the function is called by the argument
}
greetUser("Nikki"); //Nikki is the argument


function addNumbers(a,b){
    return (a + b); //this returns the sum of the two numbers to the variable total, without using return, it would be undefined
}
let total=addNumbers(8,5);
console.log("The total is " + total); //this prints the sum of the two numbers to the console after the function is called by the arguments


function calculateArea(length, width){
    return (length * width); //this returns the area of the rectangle to the variable area, without using return, it would be undefined
}
let area=calculateArea(12,6);
console.log("The area is " + area); //this prints the area of the rectangle to the console after the function is called by the arguments

// Call Each Function
// Log all results to the console.
// Show at least one function using return and one using console.log().




// Add User Input
// Ask the user for values using prompt().
// Pass those values as parameters when calling your functions.

function age(userAge){ //userAge is the parameter
    console.log("You are " + userAge + " years old."); //this prints the user's age to the console after the function is called by the argument
}

let Age = prompt("How old are you?"); //this prompts the user to enter their age and stores it in the variable userAge
age(Age); //this calls the function age() and passes the user's age as an argument

