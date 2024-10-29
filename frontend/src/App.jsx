import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import RecipeDetails from './components/RecipeDetails.jsx'; // Import your RecipeDetails component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe-detail" element={<RecipeDetails />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Route for individual recipe */}
            </Routes>
        </Router>
    );
};

export default App;
