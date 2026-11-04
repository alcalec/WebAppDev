// Select the form and result section
const form = document.getElementById("contact_form");
const result = document.getElementById("contact_form");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const message = document.getElementById("message").value;

    // Display the info back to the user
    result.innerHTML = `
      <h3>__________</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
});

// Questions
// The event.preventDefault() prevents the page from reloading when they click submit
// .value will return the value that was actually inputted into the form
// This is the java equivalent to an f string and it works like that