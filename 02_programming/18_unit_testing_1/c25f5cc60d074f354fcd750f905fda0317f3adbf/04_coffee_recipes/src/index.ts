import { coffeeRecipes, CoffeeRecipe } from "./index.test";

export function giveRecipe(coffeeName: string): string {
  //code here
  const firstRecipe: CoffeeRecipe = coffeeRecipes[0];
  let secondRecipe: CoffeeRecipe = coffeeRecipes[1];
  let thirdRecipe: CoffeeRecipe = coffeeRecipes[2];
  let fourthRecipe: CoffeeRecipe = coffeeRecipes[3];
  let fifthRecipe: CoffeeRecipe = coffeeRecipes[4];
  console.log(firstRecipe);
  let recipe: string;
  if (coffeeName === "espresso") {
    
  }
  return recipe;
}
