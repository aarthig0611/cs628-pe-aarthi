import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Recipe Finder</h1>
            <div className="nav-links">
                <Link to="/"> Recipe List </Link>
                <Link to="/add"> Add Recipe </Link>
            </div>
        </nav>
    );
};

export default Navbar;