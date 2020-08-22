import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light mb-5" id="navbarhead">
            <div className="container">
                <Link className="navbar-header" id="navtext" to="/">
                    Movies n Series Dictionary
                </Link>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-block mr-4" id="getupline">
                        The ultimate guide to Movies and Series!
                    </li>
                    <li className="nav-item d-inline-block mr-4">
                    <i className="fab fa-imdb fa-3x" id="imdb-logo" />
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;