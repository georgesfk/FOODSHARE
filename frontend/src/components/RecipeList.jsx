import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipeList.css'; // Ensure you have this CSS file for styling

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/recipes`)
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    }, []);

    return (
        <div className="recipe-list">
            {recipes.length > 0 ? (
                recipes.map(recipe => (
                    <div className="recipe-card" key={recipe.id}>
                        <img
                            src={recipe.image || 'default-recipe.jpg'} // Placeholder image
                            alt={recipe.title}
                            className="recipe-image"
                        />
                        <h2 className="recipe-title">{recipe.title}</h2>
                        <p className="recipe-description">
                            {recipe.description.length > 100
                                ? `${recipe.description.substring(0, 97)}...`
                                : recipe.description}
                        </p>
                        <a href={`/recipe/${recipe.id}`} className="recipe-button">
                            View Recipe
                        </a>
                    </div>
                ))
            ) : (
                <p>No recipes found. Please check back later!</p>
            )}
        </div>
    );
}

export default RecipeList;
