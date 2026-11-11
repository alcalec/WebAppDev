
const pizza_form = document.getElementById("pizza_form");
const results = document.getElementById("results");

pizza_form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the customer's information
    const customer_name = document.getElementById("customer_name").value;
    const pizza_size = document.querySelector('input[name="size"]:checked').value;
    const pizza_type = document.getElementById("pizza_type").value;
    const quantity = document.getElementById("quantity").value;

    // Get all selected toppings
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');

    // Create a list of selected toppings
    let topping_list = "";

    toppings.forEach(function(topping) {
        topping_list += topping.value + ", ";
    });

    if (topping_list === "") {
        topping_list = "No extra toppings";
    }

    // Display the completed pizza order
    results.innerHTML = `
        <h2>Order Confirmation</h2>
        <p>Name: ${customer_name}</p>
        <p>Pizza Size: ${pizza_size}</p>
        <p>Pizza Type: ${pizza_type}</p>
        <p>Quantity: ${quantity}</p>
        <p>Extra Toppings: ${topping_list}</p>
    `;

});