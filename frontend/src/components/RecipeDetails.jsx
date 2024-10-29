import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/recipes/${id}/comments`, { text: comment })
      .then(response => {
        setRecipe(response.data);
        setComment(''); // Reset comment field
      })
      .catch(error => console.error('Error posting comment:', error));
  };

  return (
    <div>
      {recipe && (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <h3>Ingredients</h3>
          <p>{recipe.ingredients}</p>
          <h3>Steps</h3>
          <p>{recipe.steps}</p>

          <h3>Comments</h3>
          <ul>
            {recipe.comments.map((c) => (
              <li key={c._id}>{c.text}</li> // Correct closing parenthesis added
            ))}
          </ul>

          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
            />
            <button type="submit">Post Comment</button>
          </form>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
