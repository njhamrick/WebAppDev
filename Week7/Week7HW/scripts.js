// Use at least two prompt() statements to collect values from the user.

// let num1=Number(prompt("Enter a number: "))
// for (let number=1; number<=num1; number++){ //starting point --> What we need to get to --> How we are getting there
//     console.log(number);
// } //loop length depends on the user input

let treats=Number(prompt("Enter the number of cat treats: ")) //Asks the user for input
for (let number=1; number<=treats; number++){ //starting point --> stoping point --> increment
    console.log("You have "+ number +" cat treats."); //Prints the input in between both sets of ""
}

let halloween=Number(prompt("Enter how many days until Halloween: ")) //Asks the user for input
for (let days=1; days<=halloween; days++){ //starting point --> stoping point --> increment
    if (days==5){
        console.log("Only 5 days left!")
    } else if (days==10){
        console.log("Only 10 days left!")
    } else if (days==20){
        console.log("Only 20 days left!")
    } else{
        console.log("There are "+ days +" days until Halloween.");
    }
} //Line 5, 10, and 20 will follow the if / else if statements
//Any other input out side of 5, 10, and 20 will follow the else statement