type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

const expectedCoffeeRecipes: CoffeeRecipe[] = [
  {
    name: "espresso",
    ingredients: ["espresso"],
  },
  {
    name: "macchiato",
    ingredients: ["espresso", "milk foam"],
  },
  {
    name: "latte",
    ingredients: ["espresso", "milk foam", "steamed milk"],
  },
  {
    name: "cappuccino",
    ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
  },
  {
    name: "americano",
    ingredients: ["espresso", "water"],
  },
];

export const recipeMaker = {
  //code here

  coffeeRecipes: expectedCoffeeRecipes,

  giveRecipe(coffeeName: string): string {
    //code here
    const firstRecipe = expectedCoffeeRecipes[0];
    const secondRecipe = expectedCoffeeRecipes[1];
    const thirdRecipe = expectedCoffeeRecipes[2];
    const fourthRecipe = expectedCoffeeRecipes[3];
    const fifthRecipe = expectedCoffeeRecipes[4];
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
  },
};
