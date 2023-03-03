// Select DOM elements
const button = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

// Define API endpoint and key
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

// Define options for API request
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

// Function to fetch and display joke
async function getJoke() {
  try {
    // Show loading message and disable button
    jokeElement.innerText = "Updating...";
    button.disabled = true;
    button.innerText = "Loading...";

    // Fetch joke from API
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    // Update button and display joke
    button.disabled = false;
    button.innerText = "Tell me a joke";
    jokeElement.innerText = data[0].joke;
  } catch (error) {
    // Handle errors
    jokeElement.innerText = "An error happened, try again later";
    button.disabled = false;
    button.innerText = "Tell me a joke";
    console.log(error);
  }
}

// Attach click event listener to button
button.addEventListener("click", getJoke);