// Write a loop (either while or for) that prints the numbers 1 through 10 to the console.
// Include a comment explaining how your loop works.
for(let num=1; num<=10; num++){
    console.log("Num is: "+num)
}
//let num=1  ---> starts the count at 1
//num<=10  ---> stop when greater than 10
//num++  ---> step by 1 each time
//This repeats the loop 10 times, each loop the count goes up by 1




// Ask the user for a number with prompt() and convert it to a number.
// Use a loop to count from 1 up to the user’s number.
// Log each number to the console with clear formatting.
let num1=Number(prompt("Enter a number: "))
for (let number=1; number<=num1; number++){ //starting point --> What we need to get to --> How we are getting there
    console.log(number);
} //loop length depends on the user input



// Use a loop to build a right-side triangle made of # characters.
// Each iteration should add one more # and print the current line.
// Add comments explaining how your loop builds the pattern.
let triangle="";
for(let line=1; line<=10; line++){ // Start at 1 --> Ends at 10 --> How we how there
    triangle+="#"; //Uses # for the loop
    console.log(triangle);
}// 1st line starts with 1 #, 2nd line is 2 #, 3rd line is 3 #, and so on

