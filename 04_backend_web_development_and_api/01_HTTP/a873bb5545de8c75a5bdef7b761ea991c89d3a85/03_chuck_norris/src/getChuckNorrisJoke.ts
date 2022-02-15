import request from "@fewlines-education/request";
import { getCategories } from "./getCategories";

function getChuckNorrisJoke(selectedCategory) {
  // code the function here
  selectedCategory = getCategories();
  request(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`, (error, body) => {
    if (error) {
      console.error(error);
    } else {
      console.log(body);
    }
  });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
