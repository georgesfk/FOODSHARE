import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css'; // Optional: for styling

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching recipe:', error);
        setError('Failed to load recipe. Please try again later.');
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/recipes/${id}/comments`, { text: comment })
      .then(response => {
        setRecipe(response.data);
        setComment('');
      })
      .catch(error => {
        console.error('Error posting comment:', error);
        setError('Failed to post comment. Please try again.');
      });
  };

  return (
    <div className="recipe-detail">
      {error && <p className="error-message">{error}</p>}

      {recipe ? (
        <>
          <h1>{recipe.title}</h1>
          {recipe.image && <img src={recipe.image} alt={recipe.title} className="recipe-image" />}
          <p>{recipe.description}</p>
          
          {/* New Metadata Section */}
          <div className="recipe-meta">
            <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Calories:</strong> {recipe.nutrition?.calories} kcal</p>
          </div>

          <h3>Ingredients</h3>
          <ul>
            {Array.isArray(recipe.ingredients)
              ? recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              : <li>{recipe.ingredients}</li>}
          </ul>

          <h3>Steps</h3>
          <ol>
            {Array.isArray(recipe.steps)
              ? recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))
              : <li>{recipe.steps}</li>}
          </ol>

          <h3>Comments</h3>
          <ul>
            {recipe.comments && recipe.comments.length > 0 ? (
              recipe.comments.map((c) => (
                <li key={c._id}>{c.text}</li>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </ul>

          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              required
            />
            <button type="submit">Post Comment</button>
          </form>
        </>
      ) : (
        <p>Loading recipe details...</p>
      )}
    </div>
  );
};

export default RecipeDetail;
