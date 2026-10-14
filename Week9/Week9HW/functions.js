// One function that takes no parameters.
function greetUser(){ //no parameters
    console.log("Hello, user!"); //this prints the greeting to the console after the function is called
}
greetUser(); //this calls the function greetUser() and prints the greeting to the console


// One that accepts parameters and returns a value.
function subNubmers(a,b){ //a and b are the parameters
    return (a - b); //this returns the difference of the two numbers to the variable total, without using return, it would be undefined
}
let total = subNubmers(26, 5); //this calls the function subNubmers() with the arguments 26 and 5, and assigns the returned value to the variable total
console.log("The total is " + total); //this prints the difference of the two numbers to the console after the function is called by the arguments


// One that calls another function inside it (nested function call).
function multiply(x,y){ //x and y are the parameters
    return (x * y); //this returns the product of the two numbers to the variable result, without using return, it would be undefined
}
function printMultiply(x,y){ //x and y are the parameters
    console.log("The total is: " + multiply(x,y)); //this prints the product of the two numbers to the console after the function is called by the arguments
}

printMultiply(4,5); //this calls the function printMultiply() with the arguments 4 and 5, and prints the product of the two numbers to the console after the function is called by the arguments
// I separated multiply() and printMultiply() so one function handles the calculation and the other displays the result.


// Collect data using prompt() and use it as parameters.
function cat(catName){ //catName is the parameter
    console.log("Your cat's name is " + catName); //this prints the user's cat's name to the console after the function is called by the argument
}
let catName = prompt("What is your cat's name?"); //this prompts the user to enter their cat's name and stores it in the variable catName
cat(catName); //this calls the function cat() and passes the user's cat's name as an argument


// Use a Loop Inside a Function:
//     Example ideas: generate a multiplication table, countdown, or running total.
function countdown(n){ //n is the parameter
    for(let i=n; i>=0; i--){ //this for loop counts down from n to 0. the -- operator decrements the value of i by 1 each time the loop runs
        console.log(i); //this prints the value of i to the console each time the loop runs
    }
}
countdown(5); //5,4,3,2,1,0
// I used a for loop because I know the starting number and want to count down to zero.


// Use console.log() to show outputs clearly.

// Explain what each function does and why you structured it that way.


