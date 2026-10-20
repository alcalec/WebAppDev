 // Grabs user input for a name and inserts it and returns Hello (name)!
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
let name = prompt("What's your name?");
greetUser(name);

// This asks for 2 numbers and returns the sum
function addNumbers(a, b) {
    return a + b;
}
let num1 = Number(prompt("Enter your first number:"));
let num2 = Number(prompt("Enter your second number:"));
let total = addNumbers(num1, num2);
console.log("The sum is " + total);


// This ask for the length and width from the user and calculates area
function calculateArea(length, width) {
    return length * width;
}
let length = Number(prompt("Enter a length:"));
let width = Number(prompt("Enter a width:"));
let area = calculateArea(length, width);
console.log("The area is " + area);