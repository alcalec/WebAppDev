console.log("Linked")
// DOM and basic manipulation
// Document Object Model, how browser represnets your web page in memory
// HTML elements becomes a JS object that we can access, change or delete
// JS to change text, color, etc. Occurs after the web page fully loads

// Change text content with JS
// Find HTML element by ID
const title=document.getElementById("title");
// document- whole webpage loaded
// .getelement finds element in HTMLL with ID
// const- constant variable
// it will always point to the same DOM element

title.textContent="sdlkf;sad f"
// .textConent access or changes text

// selecting Elements
// getElementbyID, selects by id

//querySelector(), selects first match (ID, class, tag) .main

//querySelectorAll() Returns nodelist of all matchess (tag)

const mainSection=document.querySelector(".main");
mainSection.style.backgroundColor="red"

const paragrphs=document.querySelectorAll("p")

//Loop throuuh all p elements and change their text
paragraphs.forEach((para, index) => {
    para.textContent='paragraph ${index + 1} modified by querySelectorAll()';
    para.style.color = "blue"
});

//Adding interactivity with Event Listeners
const button = document.getElementById("toggle")
// Listen for a button click
button.addEventListener("click",() =>{
    document.body.classList.toggle("highlight");
});