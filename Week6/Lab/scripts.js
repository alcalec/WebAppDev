let score=Number(prompt("Enter your score (0-100"));

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else{
    console.log("F")
}

let age=Number(prompt("What is your age?"));

if (age>=18){
    console.log("Adult")
} else{
    console.log("Minor")
}

let weather=Number(prompt("What is the weather?"));

if (weather >= 100) {
    console.log("I can hear the harmonica");
} else if (weather >= 80) {
    console.log("That is very hot");
} else if (weather >= 60) {
    console.log("This is perfect");
} else if (weather >= 40) {
    console.log("Starting to get cold");
} else if (weather > 32) {
    console.log("It's cold")
} else {
    console.log("It's freezing")
}