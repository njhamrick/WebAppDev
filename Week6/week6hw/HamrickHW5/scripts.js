

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


//Checks the car mileage and determines if it has low/moderate/high mileage
let miles=Number(prompt("Enter how many miles your car has: "));
if(miles>=150000){
    console.log("Your car has high mileage.")
} else if(miels>=75000){
    console.log("Your car has moderate mileage.")
} else{
    console.log("Your car has low mileage.")
}

//Checks the Miles per Gallon and determines how good the car's gas mileage is 
let MPG=Number(prompt("Enter how many miles per gallon your car gets: "));
if(MPG>=35){
    console.log("Your car gets great gas mileage.")
}else if(MPG>=25){
    console.log("Your car gets good gas mileage.")
}else if(MPG>=15){
    console.log("Your car gets average gas mileage")
}else{
    console.log("Your car gets bad gas mileage")
}


//Checks the gas level, and determines if the user is taking a long tip or not, determines whether the user needs gas or not
let gasLevel=Number(prompt("Enter your gas tank percentage: "))
let longTrip=prompt("Are you going on a long trip? (Yes or No): ")

if(gasLevel<=25){
    if(longTrip==="yes"){
        console.log("You should get gas before your trip")
    }else{"Your gas is getting low"}
}else{
    console.log("You have plenty of gas for now.")
}
