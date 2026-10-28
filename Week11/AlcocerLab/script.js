// I changed the message to reflect my 2027 prediction and made the button blue
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
    alert("The Dodgers will win in 2027"), clickBtn.style.backgroundColor = "blue";
});


// The first click reveal it needs to be clicked again and asks who the best is. Upon double click we reveal LAD and changes to blue.
const dblBtn = document.getElementById("dblBtn");

dblBtn.addEventListener("click", function () {
  dblBtn.textContent = "Who's the best! (Click again)";
});

dblBtn.addEventListener("dblclick", () => {
dblBtn.textContent = "LAD!", dblBtn.style.backgroundColor = "dodgerblue";
});


// while the text is not being hovered we are lightgrey and regular font, but while hovering we go big and blue
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
hoverText.style.color = "dodgerblue", hoverText.style.fontSize = '20px';
});
hoverText.addEventListener("mouseout", () => {
hoverText.style.color = "lightgrey", hoverText.style.fontSize = '16px';
});


// This will show what you typed in the webpage and will be bigger and in blue as well
document.getElementById("textInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const value = event.target.value;
        document.getElementById("output").textContent = value;
        event.target.value = ""; 
    }
});
output.style.color ="dodgerblue"
output.style.fontSize = '20px'