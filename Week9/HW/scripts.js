// Function that asks the user for their favorite baseball team
function favorite_team() {
    let team = prompt("What is your favorite baseball team?");
    return team;
}

// Fuction that will perform the math for a jersey number to find that number squared
function jersey_square(number) {
    return number * number;
}

// Function that grabs the team and number to  to calculate the jersey square.
function show_stats(team, number) {
    console.log("Let's go, " + team + "!");
    console.log("Your jersey number squared is: " + jersey_square(number));
}

// Counts down from the number entered by the user.
function count_down(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
    console.log("0!");
}


//I think it's easier to see all these functions first and splitting the prompts/variables then running the functions

// Gets the user's favorite team.
let team = favorite_team();

// Gets the user's jersey number.
let jersey = Number(prompt("What is your jersey number?"));

// Gets the starting number for the countdown.
let countdown = Number(prompt("What number should the countdown start at?"));

//Functions

// Displays team and jersey math
show_stats(team, jersey);

// Starts countdown
count_down(countdown);