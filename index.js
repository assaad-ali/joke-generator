// Define the JokeGenerator class
class JokeGenerator {

  constructor(apiKey, apiURL) {

    // Define the API endpoint URL and query parameters as instance variables
    this.apiKey = apiKey;
    this.apiURL = apiURL;

    this.options = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    };

    // Get references to the DOM elements for the button and joke text
    this.button = document.getElementById("btn");
    this.jokeElement = document.getElementById("joke");
  }

  // Async function to get a joke from the API
  async getJoke() {
    try {

      this.jokeElement.innerText = "Updating...";


      this.button.disabled = true;
      this.button.innerText = "Loading...";

      // Make a request to the API and get the response as JSON data
      const response = await fetch(this.apiURL, this.options);
      const data = await response.json();

      // Re-enable the button and update the text with the joke data
      this.button.disabled = false;
      this.button.innerText = "Tell me a joke";
      this.jokeElement.innerText = data[0].joke;
    } catch (error) {

      this.jokeElement.innerText = "An error happened, try again later";

      // Re-enable the button to allow the user to try again
      this.button.disabled = false;
      this.button.innerText = "Tell me a joke";


      console.log(error);
    }
  }


  init() {
    this.button.addEventListener("click", this.getJoke.bind(this));
  }
}


const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const jokeGenerator = new JokeGenerator(apiKey, apiURL);


jokeGenerator.init();
