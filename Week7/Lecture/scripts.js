// --Loops--
// Repeat code multiple times, without duplication code

//the WHILE Loop
while (condition){
    // code to run repeatedly, if condition is true
    // Infinite loops, make sure something inside changes the condition
}

//basic program that is going to count from 1-5, and will display it via console
let count = 0; // starting point
while(count<=5){ //checks condition, if true everything in brackets runs
    console.log("Count is "+count);
    count++; //increment of 1
}

//FOR loop
for(initialization; condition; final-expression){
    //repeated code
}

for(let i=1;i<=5;i++){
    console.log("i is "+i);
}

//let i=1 is starting point
// i<=5 means to stop when greater than 5
// i++, we are counting by 1
//why FOR is cleaner: All loop logic is in one line, easier for Sebastian

//program that elts the user pick what number to count to
let num = Number(prompt("Pick a number: "));
for(let i=1; i<=num; i++){
    console.log(i);
}

//classic triangle loop pattern
let triangle="";
for (let line=1; line<=7; line++){
    triangle+="*";
    console.log(triangle);
}