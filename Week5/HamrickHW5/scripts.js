//This is a comement
//Create at least 5 variables (mix of strings, numbers, booleans)
//Include at least 2 math operations
//Include at least 2 string concatenation
//Print all results with console.log
//Display at least one result on the webpage using 
    //document.body.innerHTML += "<p>Result: " + total + "</p>";

//Pick a theme of your choice (sports, music, hobbies, movies, etc.)
//Submit a zipped folder with all required files to Canvas.



let carMake= "Subaru";
let carModel= "Outback";
let mileage=151300;
let mileageMax=250000;
let milesRemaining=mileageMax - mileage;
let tripMiles= 182;
let mpg=28;
const needsGas=false;

console.log(carMake);
console.log(carModel);
console.log(mileage);
console.log(mileageMax);
console.log(milesRemaining);
console.log(tripMiles);
console.log(mpg);
console.log(needsGas);

// 2 Math Operations
console.log(milesRemaining);
console.log(tripMiles/mpg);

console.log("My car is a " + carMake + " " + carModel);
console.log("Does my " + carMake + " " + carModel + " need gas?: " + needsGas);

//Adds a paragraph to the HTML body that displays the milesRemaining result on the webpage.
document.body.innerHTML += "<p>Miles remaining: " + milesRemaining + "</p>";

//document.body directs to the pages <body>
//innerHTML is for the content inside that body
// += adds new content without replacing whats already there
// "<p>...</p>" creates a paragraph
// + milesRemaining + inserts the value of that variable into that paragraph