import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((categories) => resolve(categories));
  });
}

function getJoke(category: string): Promise<string> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((joke) => resolve(joke.value));
  });
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
