//Loops Notes:
//What if we need to repeat the same block of code 100 times?

//Why loops?
//Loops let us repeat tasks without duplicating code

//Common use case: 
    //Coutning numbers
    //Repeating actions through user input
    //Building patterns

//WHILE loop
// while(condition){
//     //code to run repeatedly
// }
//as long as the condition is true, loop runs
//INFINITE LOOP risk: make sure something inside the conition changes

// let count=1; //initializes loop control variable, starts at 1
// while(count<=5){ //perameter that needs to be met, checks condition
//     console.log("Count is: "+count);
//     count++ //this is how we increment to avoid our infinite loop
// } //will complete 5 counts (1-5)



// //FOR Loop
// for(initialization; condition; final-epression;){
//     //repeated code
// }

//FOR loop is most common for counting loops
//Initialization --> Condition Check --> Body --> Increment --> Repeat
// for(let i=1; i<=5; i++){ //start at 1 --> stop when greater than 5 --> step by 1 each time
    // console.log("i is: "+i)
// } //repeats 5 times (1-5)

//Why for is cleaner: All loop logic is in one line, easier to read

// let num=Number(prompt("Pick a number: "))
// for (let i=1; i<=num; i++){ //starting point --> What we need to get to --> How we are getting there
//     console.log(i);
// }
//loop length depends on the user input


//Pattern Building with Loops:
    //Classic trianglt loop
let triangle="";
for(let line=1; line<=7; line++){
    triangle+="#";
    console.log(triangle);
} // 1st line starts with 1 #, 2nd line is 2 #, and so on