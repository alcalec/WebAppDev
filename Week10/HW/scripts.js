// Check to see if properly linked: make sure file is linked
console.log("DOM HW loaded");

// 1) Grab your title and main section
const titleEl = document.getElementById("title");
const mainEl = document.getElementById("main");
// 2) Update the title text
titleEl.textContent = "Dodgers — Powered by JavaScript";
// WHY: textContent replaces the visible text inside the element safely

const imgEl = document.getElementById("image");
// Swap to a new image and alt text (use any public image URL)
imgEl.src = "d2025.jpeg";
imgEl.alt = "2025 Champs";
// WHY: Changing attributes lets you swap content without editing HTML.

// Create list of Dodgers players
const players = [
    { name: "Shohei Ohtani", position: "DH" },
    { name: "Mookie Betts", position: "OF" },
    { name: "Freddie Freeman", position: "1B" }
];

// Select the list in the HTML
const listEl = document.getElementById("list");

// Clear the list before adding players
listEl.innerHTML = "";

// Create a list item for each player
players.forEach((player) => {
    const li = document.createElement("li");
    li.textContent = `${player.name} — ${player.position}`;
    listEl.appendChild(li);
});

// Select the intro paragraph using its class
const introEl = document.querySelector(".intro");

// Select all list items
const playerItems = document.querySelectorAll("#list li");

// Select the highlight button
const highlightBtn = document.getElementById("highlight_button");

// Toggle the highlight class when clicked
highlightBtn.addEventListener("click", () => {
    mainEl.classList.toggle("Highlight");
});

// Select the swap image button
const swapBtn = document.getElementById("image_button");

// Track which image is currently displayed
let swapped = false;

// Swap the image when the button is clicked
swapBtn.addEventListener("click", () => {
    if (!swapped) {
        imgEl.src = "d2025.jpeg";
        imgEl.alt = "2025 Champs";
        swapped = true;
    } else {
        imgEl.src = "d2024.jpg";
        imgEl.alt = "2024 Champs";
        swapped = false;
    }
});

// Select the message paragraph
const messageEl = document.getElementById("message");

// Change the paragraph text and color
messageEl.textContent = "Let's Go Dodgers! World Series Champions!";
messageEl.style.color = "dodgerblue";