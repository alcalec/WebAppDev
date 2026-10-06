// This for loop will be a factorial calculator
// Factorials are products of integers up to the number they choose
// So 1 x 2 x 3... We use multiplication
// The user will pick a number and it will display the factorial
// We set result as 1 because it will multiply into whatever it needs and not effect the math

let chosen = Number(prompt("Pick a number to find the factorial: "));
let result = 1;

for(let i=1; i<=chosen; i++){
    result = result * i;
    console.log(result);
}

console.log("You chose " + chosen);
console.log("The factorial is: " + result);

// This will count to whatever number the user chooses
// We use a while loop to then display messages at certain checkmarks
// We get a special message at 10, 20, and 30

let num= Number(prompt("Pick a number to count to: "));
let count = 0;

console.log("You chose " + num);

while(count < num){
    count++;

    if (count === 10){
        console.log("10/10! We hit 10!");
    } else if (count === 20){
        console.log("We hit the roaring 20!");
    } else if (count === 30){
        console.log("Oof 30 is too real of a number. Old!");
    } else{
        console.log(count);
    }
}
