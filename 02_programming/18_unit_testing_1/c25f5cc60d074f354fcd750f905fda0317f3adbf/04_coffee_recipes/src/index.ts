import { coffeeRecipes, CoffeeRecipe } from "./index.test";

export function giveRecipe(coffeeName: string): string {
  //code here
  const firstRecipe: CoffeeRecipe = coffeeRecipes[0];
  const secondRecipe: CoffeeRecipe = coffeeRecipes[1];
  const thirdRecipe: CoffeeRecipe = coffeeRecipes[2];
  const fourthRecipe: CoffeeRecipe = coffeeRecipes[3];
  const fifthRecipe: CoffeeRecipe = coffeeRecipes[4];
  let recipe: string;
  if (coffeeName === "espresso") {
    recipe = `${firstRecipe.name} ingredients:\n- ${firstRecipe.ingredients.join(",\n- ")}`;
  } else if (coffeeName === "macchiato") {
    recipe = `${secondRecipe.name} ingredients:\n- ${secondRecipe.ingredients.join(",\n- ")}`;
  } else if (coffeeName === "latte") {
    recipe = `${thirdRecipe.name} ingredients:\n- ${thirdRecipe.ingredients.join(",\n- ")}`;
  } else if (coffeeName === "cappuccino") {
    recipe = `${fourthRecipe.name} ingredients:\n- ${fourthRecipe.ingredients.join(",\n- ")}`;
  } else if (coffeeName === "americano") {
    recipe = `${fifthRecipe.name} ingredients:\n- ${fifthRecipe.ingredients.join(",\n- ")}`;
  } else {
    recipe = `Sorry, ${coffeeName} does not exist on our list.`;
  }
  return recipe;
}
