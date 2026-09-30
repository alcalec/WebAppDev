let team_name = "Dodgers"
let city = "Los Angeles";
let wins = 96;
let losses = 60;
let playoffs = true;

let total_games = wins + losses;
let win_percent = (wins / total_games);

let team = "The " + city + " " + team_name;
let record = team + " " + wins + "-" + losses;

console.log(team_name);
console.log(city);
console.log(wins);
console.log(losses);
console.log(playoffs);
console.log(total_games);
console.log(win_percent);
console.log(team);
console.log(record);

// New Week 6 additions


let baseball = prompt("Who is your baseball team?");
// This asks what your favourite baseball team is
// If you for some reason say the rockies or angels it prompts the losing message
// If it's any other team then you get the option to state the wins
// Anything above 81 is winning, 81 is middle, lower is losing

if (baseball.toLowerCase() === "rockies" ||
    baseball.toLowerCase() === "colorado" ||
    baseball.toLowerCase() === "angels" ||
    baseball.toLowerCase() === "anaheim"){
    console.log(baseball);
    console.log("You DEFINITELY had a losing season.");

}else{
    console.log(baseball);
    let season = Number(prompt("How many games did they win?"));
    if (season > 81){
        console.log(season);
        console.log("You had a winning season!");
    } else if (season === 81){
        console.log(season);
        console.log("You are mid!");
    }
    else{
        console.log(season);
        console.log("You had a losing season :(");
    }
}

let playoff_team = prompt("Who is your team? We will check for playoff spot. (Please list city then name)");
playoff_team = playoff_team.toLowerCase();

// This will ask for the team name with city to make it easiest with all these or operations
// We lowercase everything so they don't have to worry about caps
// It checks for the 12 MLB playoff teams and if not one then returns a no


if (playoff_team === "tampa bay rays" ||
    playoff_team === "cleveland guardians" ||
    playoff_team === "houston astros" ||
    playoff_team === "new york yankees" ||
    playoff_team === "boston red sox" ||
    playoff_team === "chicago white sox" ||
    playoff_team === "milwaukee brewers" ||
    playoff_team === "los angeles dodgers" ||
    playoff_team === "atlanta braves" ||
    playoff_team === "san diego padres" ||
    playoff_team === "chicago cubs" ||
    playoff_team === "philadelphia phillies") {

    console.log(playoff_team);
    console.log("Your team made the playoffs!");

} else {

    console.log(playoff_team);
    console.log("Maybe next year champ.");
}


let runs = Number(prompt("How many runs did your team score this year?"));

// Runs will check how many runs the team scored this year
// We define 750 or above as strong offense, between 650 and 750 as average, and below 650 as low

if (runs >= 750) {
    console.log(runs);
    console.log("Your team had excellent offense!");
} else if (runs >= 650) {
    console.log(runs);
    console.log("Your team had an average offense.");
} else {
    console.log(runs);
    console.log("Your team had a low offense.");
}




document.body.innerHTML += "<p>Result: " + record + "</p>";
// The document portion is the HTML document
// The body is the body section
// The innerHTML is inside the body section
// += means to add new things instead of rewriting the HTML
// The quotations with the p tags adds a paragraph
// record is my variable to print the team's season record