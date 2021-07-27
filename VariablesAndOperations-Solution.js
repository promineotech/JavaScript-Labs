//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 23.64;

//create a variable to hold a person's middle initial
let middleInitial = 'G';

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = false;

//create a variable to hold a customer's first name
let customerFirstName = "Sally";

//create a variable to hold a street address
let streetAddress = "1234 W Easy St";

//print all variables to the console
console.log("Available seats left on the plane: " + availablePlaneSeats);
console.log(costOfGroceries + " is the price for groceries.");
console.log("The person's middle initial is " + middleInitial);
console.log("It is hot outside - " + isHotOutside);
console.log("The customer's first name is " + customerFirstName);
console.log(streetAddress + " is where the person lives.");



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
availablePlaneSeats -= 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries += 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'C';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = customerFirstName + " " + middleInitial + " Smith";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hi, my name is " + fullName + " and I live at " + streetAddress + ".");