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


async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
