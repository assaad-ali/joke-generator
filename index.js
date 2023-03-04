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

}

