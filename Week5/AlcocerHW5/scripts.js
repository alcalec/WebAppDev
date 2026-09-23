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


document.body.innerHTML += "<p>Result: " + record + "</p>";
// The document portion is the HTML document
// The body is the body section
// The innerHTML is inside the body section
// += means to add new things instead of rewriting the HTML
// The quotations with the p tags adds a paragraph
// record is my variable to print the team's season record