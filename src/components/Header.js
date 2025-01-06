import React from 'react';
import './Header.css'; // Import a CSS file for styling

function Header() {
    return (
        <header className="header"> {/* Added a className for styling */}
            <h1>Chidiebele Benjamin Amechi</h1>
            <p className="subheading">Junior Software Developer | Web Developer | Game Designer</p> {/* Added a className for styling */}
        </header>
    );
}

export default Header;