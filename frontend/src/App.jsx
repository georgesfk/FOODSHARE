import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx'; 
import About from './components/About.jsx'; // Import About component
import RecipeList from './components/RecipeList.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import Submit from './components/Submit.jsx'; 
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> {/* Route for About */}
                    <Route path="/recipe-list" element={<RecipeList />} />  
                    <Route path="/recipe-detail" element={<RecipeDetails />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                    <Route path="/submit" element={<Submit />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
