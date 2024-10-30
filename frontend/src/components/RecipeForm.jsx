import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({ title: '', description: '', ingredients: '', steps: '' });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/recipes', recipe)
      .then(response => {
        alert('Recipe submitted successfully!');
        // Optionnel : Rediriger ou réinitialiser le formulaire
      })
      .catch(error => console.error('Error submitting recipe:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={recipe.title} onChange={handleChange} placeholder="Recipe Title" />
      <textarea name="description" value={recipe.description} onChange={handleChange} placeholder="Description" />
      <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder="Ingredients" />
      <textarea name="steps" value={recipe.steps} onChange={handleChange} placeholder="Steps" />
      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default RecipeForm;
