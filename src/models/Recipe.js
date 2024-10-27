const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
});

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  steps: { type: String, required: true },
  comments: [commentSchema],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
