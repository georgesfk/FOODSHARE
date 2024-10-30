import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import Submit from './components/Submit.jsx'; 
import './App.css';



const App = () => {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<Home />} />

            
               <Route path="/recipe-list" element={<RecipeList />} />  
                <Route path="/recipe-detail" element={<RecipeDetails />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
                <Route path="/submit" element={<Submit />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
            <nav>
                <Link to="/">Home</Link><br/>

                <Link to="/recipe-list">Recipe List</Link><br/>

                <Link to="/recipe-Detail">Recipe Detail</Link><br/>

                <Link to="/recipe:Id">Recipe:Id </Link><br/>

                <Link to="/submit">Submit Recipe</Link><br/>

               
            </nav>
        </Router>
    );
};

export default App;
