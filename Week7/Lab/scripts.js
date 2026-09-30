
for(let i=1;i<=10;i++){
    console.log("i is "+i);
}
//I use i=1 as the starting point which means it starts at 1
// i<=10 means to stop when greater than 10, our target number
// i++, we are counting by 1
//We print the number to the console

let num = Number(prompt("Pick a number: "));
for(let i=1; i<=num; i++){
    console.log(i);
}
//First we ask for a number and Number converts the input
// i=1 starts us at 1
// i<=num means we stop at the number the user chose
// i++ means we count by 1
//We print the number to the console

let triangle="";
for (let line=1; line<=7; line++){
    triangle+="#";
    console.log(triangle);
}
//We start with the variable triangle that is an empty string
// We define line as 1 to start there
// We only want to go to 7 so that's the target
// We count by 1
// The triangle will add a # to the existing triangle variable everytime we move to the next line
// We print triangle with the added #