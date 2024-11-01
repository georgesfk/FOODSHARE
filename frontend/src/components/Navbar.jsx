// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/recipe-list">Recipe List</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/recipe-detail">Recipe Detail</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/submit">Submit Recipe</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
