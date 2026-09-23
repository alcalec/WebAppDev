
// let score = 85;

// else if (score > 69){
//     console.log("You got a C")
// }

// else{
//     console.log("You have a mediocre grade");
// }

let age=25;
let isMember=true

if (age>=18){
    if (isMember){
        console.log("Adult member benefits applied");
    }
    else{
        console.log("Adult, but no membership")
    }

}else{
    console.log("Minor")
}

// We use Prompt() to make our websites more interactive
// let score=85;
//this variable is hardcoded, user can't change this

let score=Number(prompt("Enter your score (0-100"));
// input is a string data type, we must convert it to the number data type
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

// Website to ask the user for their name and, then display "Hello [name]"
let username = prompt("what is your name?")
