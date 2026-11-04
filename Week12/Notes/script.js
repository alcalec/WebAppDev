//Select form element
const form=document.getElementById("contactForm")
//Listen for submit event
form.addEventListener("submit",function(event){
    event.preventDefault(); //Stops refresh
    //Get input value
    const name=document.getElementById("name").value;
    //In console, state Hello "name"
    console.log("Hello, ",name);
})

//Display data on front side of website
const result=document.getElementById("contactForm");
result.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    result.innerHTML=`<p>Hello, ${name}! Thanks for submitting!</p>`;
})