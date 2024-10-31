const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
});

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: String,
  steps: String,
  comments: [commentSchema],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Sample French recipes to add to the database
const sampleRecipes = [
  {
    title: "Coq au Vin",
    description: "A classic French dish with chicken braised in red wine, lardons, mushrooms, and garlic.",
    ingredients: "1 whole chicken, 1 bottle of red wine, 150g lardons, 200g mushrooms, 2 carrots, 1 onion, garlic, thyme, bay leaf, salt, pepper",
    steps: "1. Marinate chicken in wine with garlic, thyme, and bay leaf overnight. 2. Brown the lardons in a pan, then remove. 3. In the same pan, brown the chicken pieces. 4. Add chopped onions, carrots, and mushrooms, then pour in the wine marinade. 5. Simmer on low heat for 2 hours. 6. Season to taste and serve hot.",
    comments: [{ text: "Delicious and rich in flavor!" }]
  },
  {
    title: "Ratatouille",
    description: "A vegetable dish from Provence made with tomatoes, zucchini, eggplant, and bell peppers.",
    ingredients: "2 tomatoes, 1 zucchini, 1 eggplant, 1 bell pepper, 2 cloves garlic, olive oil, thyme, salt, pepper",
    steps: "1. Chop all vegetables. 2. Heat olive oil in a pan and cook garlic until fragrant. 3. Add eggplant and cook until softened. 4. Add bell pepper, zucchini, and tomatoes. 5. Season with thyme, salt, and pepper. 6. Simmer for 30 minutes. Serve hot or cold.",
    comments: [{ text: "A perfect dish for summer!" }]
  },
  {
    title: "Crêpes",
    description: "Thin, delicate pancakes that can be enjoyed sweet or savory.",
    ingredients: "250g flour, 500ml milk, 3 eggs, 1 tbsp melted butter, a pinch of salt",
    steps: "1. Mix flour and salt in a bowl. 2. Add eggs, then slowly add milk while whisking. 3. Stir in melted butter. 4. Let batter rest for 30 minutes. 5. Heat a non-stick pan and pour a ladle of batter. 6. Cook for 1-2 minutes on each side. Serve with your favorite fillings.",
    comments: [{ text: "Easy to make and so versatile!" }]
  }
];

// Pre-populate the recipes in the database if not already present
Recipe.find({}, (err, recipes) => {
  if (err) {
    console.error("Error fetching recipes for pre-population:", err);
    return;
  }
  if (recipes.length === 0) {
    Recipe.insertMany(sampleRecipes)
      .then(() => console.log("Sample French recipes added to the database!"))
      .catch(err => console.error("Error adding recipes:", err));
  }
});

module.exports = Recipe;
