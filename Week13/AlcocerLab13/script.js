// Double checking that it's connected
console.log("Connected");

// This is all of my variables that are getting set up
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

const successMessage = document.getElementById("successMessage");

// Everything that needs to be inputted and submitted
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

let isValid = true;
successMessage.textContent = "";

const name = nameInput.value.trim();

if (name === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
} else {
    nameError.textContent = "";
}

const email = emailInput.value.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
} else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
} else {
    emailError.textContent = "";
}

const age = Number(ageInput.value);

if (ageInput.value.trim() === "") {
    ageError.textContent = "Please enter your age.";
    isValid = false;
} else if (isNaN(age) || age < 1) {
    ageError.textContent = "Please enter an age of at least 1.";
} else {
    ageError.textContent = "";
}

if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    contactForm.reset();
}
});

// My blurs are at the bottom and will show a message if moved out before adding anything
nameInput.addEventListener("blur", function() {
    const name = nameInput.value.trim();

    if (name === "") {
        nameError.textContent = "Please enter your name.";
    } else {
        nameError.textContent = "";
    }
});

emailInput.addEventListener("blur", function() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
    } else {
        emailError.textContent = "";
    }
});

ageInput.addEventListener("blur", function() {
    const age = Number(ageInput.value);

    if (ageInput.value.trim() === "") {
        ageError.textContent = "Please enter your age.";
    } else if (isNaN(age) || age < 1) {
        ageError.textContent = "Please enter an age of at least 1.";
    } else {
        ageError.textContent = "";
    }
});