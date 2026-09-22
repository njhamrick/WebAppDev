//Where we will be doing all of our JavaScript for the rest of the semester

//Conditional statements: if/else
//We need conditionals so our programs can make decisions

//Comparison Operators in JS:
// === strict equal
// !== strict not equal
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to

console.log(5>3); //True
console.log(11===11); //True
console.log(11<5); //False

//If/Else Basics
//First condition that is TRUE will run
let score=85;
if (score>=90){ //whatever is inbetween the () must be true in order for the statement in between the {} to run
    console.log("You got an A! ")
}
else if(score>=80){
    console.log("You got a B! ") //This else if will run
}
else if(score>=90){
    console.log("You got a C! ")
}
//ELSE runs when when non of the if/else statements are triggered
else {
    console.log("You got an F. ")
}

//Nested IF statements: an IF within an IF
let age=20;
let isMember=true;

if (age>=18){
    if(isMember){
        console.log("Adult member benefits applied") //This runs because they are an adult & member
    } else{
        console.log("Adult, but not a member")
    }
} else{
    console.log("minor");
}



//Making the program a bit more interactive. . . PROMPT()
let grade=Number(prompt("Enter you grade: "))
//prompt() displays a popup asking for input
//input is a string, number converts string data type to number data type
if(grade>=90){
    console.log("You have an A")
}
else if(grade>=80){
    console.log("You have a B")
}
else if(grade>=70){
    console.log("You have a C")
}
else{
    console.log("Your grade is not passing")
}


//If/Else template
// if(condition){
//     console.log("Condition is true")
// } else{
//     console.log("Condition is false")
// }


//If/Else Ladder
// if(condition1){
//     console.log("Condition 1 is true")
// } else if(condition2){
//     console.log("Condition 2 is true")
// } else{
//     console.log("None of the conditions are true")
// }