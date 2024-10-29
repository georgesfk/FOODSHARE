// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => {
        console.error('Error fetching recipes:', error);
        setError('Failed to load recipes. Please try again later.');
      });
  }, []);

  return (
    <div>
      <h1>foodieshare</h1>
      <h2>Welcome to foodieshare</h2>
      <h3>We Have a Lot of Recipes</h3>

      <Link to="/recipe-details">
        <button className="recipe-button">Recipes Detail</button>
      </Link>
      <Link to="/recipe-list">
        <button className="recipe-button">Recipe List</button>
      </Link>

      {error ? (
        <p className="error-message">{error}</p>
      ) : recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map(recipe => (
            <li className="recipe-item" key={recipe._id}>
              <Link to={`/recipe/${recipe._id}`}>
                <h2>{recipe.title}</h2>
              </Link>
              <p><strong>Description:</strong> {recipe.description}</p>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Steps:</strong> {recipe.steps}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes available. Check back later!</p>
      )}
    </div>
  );
};

export default Home;
