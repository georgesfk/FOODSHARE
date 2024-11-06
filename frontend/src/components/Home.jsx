import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/recipes')
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setError('Failed to load recipes. Please try again later.');
        setLoading(false);
      });
  }, []);

  const renderContent = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (error) return <p className="error-message">{error}</p>;

    if (recipes.length > 0) {
      return (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li className="recipe-item" key={recipe._id}>
              <Link to={`/recipe/${recipe._id}`}>
                <h2>{recipe.title}</h2>
              </Link>
              <p><strong>Description:</strong> {recipe.description}</p>
              <p><strong>Ingredients:</strong> {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients}</p>
              <p><strong>Steps:</strong> {Array.isArray(recipe.steps) ? recipe.steps.join(', ') : recipe.steps}</p>
            </li>
          ))}
        </ul>
      );
    }

    return <p>No recipes available. Check back later!</p>;
  };

  return (
    <div>
      <h1>FoodieShare</h1>
      <h2>Welcome to FoodieShare</h2>
      <h3>We Have a Lot of Recipes</h3>

      {/* <Link to="/recipe-list">
        <button className="recipe-button">Recipe List</button>
      </Link>
      <Link to="/submit">
        <button className="submit-button">Submit</button>
      </Link> */}

      {renderContent()}
    </div>
  );
};

export default Home;
