console.log("Linked");

//What is a function?
//A function is a reusable block of code that performs a specific task. 
//Mini program inside your larger script

function greetuser(){
    console.log("Hello, there")
} 

greetuser(); //Calls the function

//function structure
//FUNCTION, tells javascript we are defiing a function.     ex. function greetuser(){}
//NAME, identifies the function. ex. greetuser
//PARAMETER, varibles inside the paremtheis that recieve data (name)
//BODY, the code between the curly bracketts that runs when calls Ex. {console.log("Hello, there")}


//Why use functions?
//Avoid repetition, write the code once and call it multiple times
//Organization, keeps long scripts tidy and readable
//Testing, easier to isolate and debug
//Scalability, makes large projects modular


//Parameters and Arguments
//PArameters are placeholders when defining a function
//Arguments, actual values when calling the function

function greet(name){ //name is the parameter
    console.log("Hello, " + name);
}
greet("Nikki"); //Nikki is the argument


//Return vs Console Output
//function that adds 2 numbers together
function addNumbers(a,b){
    console.log(a + b);
}
let total=addNumbers(4,6);
console.log("The total is " + total); //undefined because the function does not return a value

function addNumbers(c,d){
    return (c + d);
}
let total2=addNumbers(3,6);
console.log("The total is " + total2); //9 because the function returns a value

//Return, send a value back to where the function was called
//console.log, prints

//return is like your function handing you back a note with the answer written in it
//console.log is your function yelling the answer out louod, we hear it, but we can't use it

function multiply(x,y){
    return (x * y);
}
let result = multiply(4,5);
console.log("The result is " + result); //20 because the function returns a value

//Functions with loops and conditionals
//Function can contain logic like if/else and for loops

function counttoN(n){ //Can reuse
    for(let i=1; i<=n; i++){
        console.log(i);
    }
}
counttoN(5); //1,2,3,4,5


//Nested Functions
//A function can call another function inside of it
function square(num){
    return num * num;
}

function printSquare(num){
    console.log("The square is: " + square(num));
}
printSquare(6);


//User Input
//Adding user input with prompt()
function greetuser1(){
    let name = prompt("What is your name?");
    console.log("Hello, " + name);
}
greetuser1();


//Key concepts
//Functions are reusable building blocks
//Use parameters and returns effectively
//Always comment what a function does and what the parameters are
//Keep each function focused on a single task
//User prompt() to make functions interactive