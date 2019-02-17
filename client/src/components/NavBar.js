import React from "react";

function NavBar() {
    return (
        <nav>
        <div className="nav-wrapper">
        <a href="/" className="brand-logo">Single Books</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Search</a></li>
            <li><a href="/">Saved Books</a></li>
        </ul>
        </div>
        </nav>
    );
};

export default NavBar;
