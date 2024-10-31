import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeList() {
const [recipes,setRecipes] = useState([])

  useEffect(() => {

    axios
      .get(`http://localhost:8080/api/recipes`)
      .then(response => {
        setRecipes(response.data);
      })
      .catch( error => {
        console.error('Error fetching recipe:', error);
      })
  }, [])

  return (
 
        <>
         {recipes.map( (recipe) => (
                    // eslint-disable-next-line no-irregular-whitespace
                    <h1>{recipe.title}</h1>
            ))}
         
         </>
     
  );
}

export default RecipeList;
