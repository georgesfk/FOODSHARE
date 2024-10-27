import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails'; // Import your RecipeDetails component
import RecipeList from './components/RecipeList';       // Import your RecipeList component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-detail" element={<RecipeDetails />} />
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Route for individual recipe */}
      </Routes>
    </Router>
  );
};

export default App;
