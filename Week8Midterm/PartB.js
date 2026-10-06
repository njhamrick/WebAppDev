//Ask for at least two values using prompt()
let height=Number(prompt("Enter your height in inches: ")); // Converts height from inches to centimeters
let centimeters = height * 2.54;
console.log(`${height} inches tall is ${centimeters} centimeters.`)

let pets=Number(prompt("Enter the number of pets you have: "));
console.log(`You have ${pets} pets.`);

//Implement at least two separate if/else decisions that use the user’s input.
let midterms=Number(prompt("Enter how many midterms you have: ")); // Determines workload based on number of midterms
if(midterms>=5){
    console.log("You have a lot of midterms.");
} else if(midterms>=3){
    console.log("You have a manageable amount of midterms.");
} else{
    console.log("You have only a few midterms.");
}

let shifts=Number(prompt("Enter many shifts you work each week: ")); // Determines workload based on number of work shifts
if(shifts>=5){
    console.log("You work a lot of shifts.");
} else if(shifts>=3){
    console.log("That's a decent amount of shifts.");
} else{
    console.log("That's not a lot of shifts.");
}
//Include one nested if 
let cats=Number(prompt("How many cats do you have?: "));
let temperment=prompt("Is your cat friendly? (Yes or No): "); // Checks cat temperament only if the user has cats

if(cats>0){
    if(temperment==="Yes"){
        console.log("You have friendly cats.");
    }else{
        console.log("You have unfriendly cats.");
    }
}else{
    console.log("You don't have any cats.");
}
//Use strict equality (===, !==) where appropriate, and comparisons (>, >=, etc.) when numeric.

//Include at least one loop (for or while) that uses either:
//a count based on user input, OR logic inside the loop (e.g., a simple FizzBuzz, or printing a pattern).
let midtermWeek=Number(prompt("Enter how many days are until the end of midterm week: ")); // Counts the remaining days of midterm week
for (let days=1; days<=midtermWeek; days++){
    if (days==1){
        console.log("Only 1 day left until the end of midterm week!");
    } else if (days==3){
        console.log("Only 3 days left until the end of midterm week!");
    } else{
        console.log("There are "+ days +" days until the end of midterm week.");
    }
}


