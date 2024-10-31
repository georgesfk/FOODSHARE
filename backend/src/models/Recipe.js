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


Recipe.find({})
.then( recipes => console.log(recipes))
.catch( err => console.log(err))

module.exports = Recipe;
