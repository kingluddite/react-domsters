import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id="navigation">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/photos'>Photos</Link></li>
                <li><Link to='/live'>Live</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;