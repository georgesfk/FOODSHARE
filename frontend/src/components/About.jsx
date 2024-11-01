// src/components/About.jsx
import React from 'react';
import './About.css'; // Optional: for styling

const About = () => {
    return (
        <div className="about">
            <h2>About This Recipe App</h2>
            <p>This application allows users to discover, share, and submit their favorite recipes.</p>
            <p>Our mission is to create a community of food lovers who can connect through their shared culinary experiences.</p>
            <h3>Features:</h3>
            <ul>
                <li>Browse a wide variety of recipes</li>
                <li>Submit your own recipes</li>
                <li>View detailed information about each recipe</li>
            </ul>
            <h3>Get Started:</h3>
            <p>To start exploring recipes, navigate to the Recipe List section!</p>
        </div>
    );
};

export default About;
